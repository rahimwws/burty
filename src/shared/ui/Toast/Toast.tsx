import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";
import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withDelay,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getStyles, styles } from "./style";
import Typography from "../Typography";

export interface ToastRef {
  show: (props: ToastProps) => void;
}

export type ToastTypes = "success" | "info" | "error" | "";

interface ToastState {
  isShow: boolean;
  type: ToastTypes;
  description: string;
}

export interface ToastProps {
  type?: ToastTypes;
  description: string;
  duration?: number;
}

const Toast = forwardRef<ToastRef, {}>((_, ref) => {
  const toastTopAnimation = useSharedValue(-100);
  const [state, setState] = useState<ToastState>({
    isShow: false,
    type: "",
    description: "",
  });
  const [queue, setQueue] = useState<ToastProps[]>([]);

  const insets = useSafeAreaInsets();
  const { backgroundColor } = getStyles(state.type);

  const updateState = (newState: Partial<ToastState>) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const handleToastCompletion = useCallback(() => {
    setQueue((prevQueue) => prevQueue.slice(1));
    updateState({ isShow: false });
  }, []);

  const processQueue = useCallback(() => {
    if (queue.length > 0) {
      const { description, type = "", duration = 2000 } = queue[0];

      updateState({
        isShow: true,
        description: description || "",
        type: type || "",
      });

      toastTopAnimation.value = withSequence(
        withTiming(Math.max(Number(insets?.top), 35)),
        withDelay(
          duration,
          withTiming(-100, undefined, (finish) => {
            if (finish) {
              runOnJS(handleToastCompletion)();
            }
          })
        )
      );
    }
  }, [queue, insets, toastTopAnimation]);

  const addToQueue = useCallback(
    (toast: ToastProps) => {
      setQueue((prevQueue) => [...prevQueue, toast]);
    },
    [setQueue]
  );

  useImperativeHandle(
    ref,
    () => ({
      show: (props: ToastProps) => addToQueue(props),
    }),
    [addToQueue]
  );

  React.useEffect(() => {
    if (!state.isShow && queue.length > 0) {
      processQueue();
    }
  }, [state.isShow, queue, processQueue]);

  const animatedTopStyles = useAnimatedStyle(() => {
    return {
      top: toastTopAnimation.value,
    };
  });

  return (
    <>
      {state.isShow && (
        <Animated.View
          style={[
            styles.toastContainer,
            { backgroundColor },
            animatedTopStyles,
          ]}
        >
          <View style={styles.titleCard}>
            {state.description && (
              <Typography color={state.type == "success" ? "dark" : "light"} align="center">
                {state.description}
              </Typography>
            )}
          </View>
        </Animated.View>
      )}
    </>
  );
});

export default Toast;
