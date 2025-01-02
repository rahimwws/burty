import { Keyboard } from "react-native";
import React, { Dispatch, SetStateAction, useCallback, useState, } from "react";
import Modal from "@/shared/ui/Modal";
import Typography from "@/shared/ui/Typography";
import { DarkButton } from "@/shared/ui/Button";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "@/shared/lib/theme";
import useCreateComment from "@/features/workout/lib/hooks/useCreateComment";
import styles from "./style";
import { toast } from "@/shared/ui/Toast";

const ModalComment = ({
  visible = false,
  setVisible,
  bookingId
}: {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  bookingId?: string
}) => {
  const [comment, setComment] = useState('');
  // const [user, setUser] = useState<number>(1);
  // const [step, setStep] = useState<1 | 2>(1);

  const {
    mutate: createComment,
    isPending: creatingComment,
  } = useCreateComment();

  const handleCreateComment = useCallback((comment: string, bookingId?: string) => {
    if (bookingId)
      createComment({ bookingId, comment }, {
        onSuccess: () => {
          toast.show({
            description: "Comment created",
            type: "success"
          });
          setVisible(false);
        },
        onError: () => {
          toast.show({
            type: "error",
            description: "Comment create error"
          })
          setVisible(false);
        }
      });
    else
      toast.show({
        description: "Space is not booked yet",
        type: "error"
      })
  }, []);

  return (
    <Modal
      visible={visible}
      custom={[
        styles.modal,
        { height: "auto" }
        // {
        //   height: step === 1 ? "auto" : "30%",
        // }
      ]}
    >
      {/* <Typography size={22} font="black">
        {step === 2 ? "Create comment" : "Select a Person"}
      </Typography> */}
      <Typography size={22} font="black">
        Create comment
      </Typography>
      {/* {step === 1 ? (
        <View
          style={{
            width: "100%",
            marginVertical: "5%",
            gap: 10,
          }}
        >
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <DarkButton
                isRoute={false}
                text={"Person" + " " + item}
                disabled={item !== user}
                action={() => setUser(item)}
                key={index}
              />
            );
          })}
        </View>
      ) : ( */}
      <TextInput
        style={styles.input}
        multiline={true}
        returnKeyType="done"
        onSubmitEditing={Keyboard.dismiss}
        placeholder="Text comment"
        placeholderTextColor={colors.gray}
        value={comment}
        onChangeText={txt => setComment(txt)}
      />
      {/* )} */}
      <DarkButton
        isRoute={false}
        text="Choose"
        disabled={false}
        // action={() => {
        //   if (step === 1) setStep(2);
        //   else {
        //     setVisible(!visible);
        //     setTimeout(() => {
        //       setStep(1);
        //     }, 500);
        //   }
        // }}
        action={() => handleCreateComment(comment, bookingId)}
        bg="blue"
        textColor="light"
        isLoading={creatingComment}
      />
    </Modal>
  );
};

export default ModalComment;
