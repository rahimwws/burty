import React, { useEffect, useState } from "react";
import {
  Modal as ModalComponent,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
} from "react-native";
import { BlurView } from "expo-blur";
import { colors } from "@/shared/lib/theme"; // Assuming you have a theme file for colors
import Typography from "../Typography";

const { width, height } = Dimensions.get("window");

interface CustomModalProps {
  visible?: boolean;
  title?: string;
  description?: string;
  leftAction?: () => void;
  rightAction?: () => void;
  leftText?: string;
  rightText?: string;
  onRequestClose?: () => void;
  custom?: false | StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Modal: React.FC<CustomModalProps> = ({
  visible,
  title,
  description,
  leftAction,
  rightAction,
  leftText,
  rightText,
  onRequestClose,
  custom = false,
  children,
}) => {
  return (
    <ModalComponent
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      {/* Blur background */}
      <BlurView intensity={50} tint="dark" style={styles.blurContainer}>
        <View style={[styles.modalContainer, custom && custom]}>
          {/* Title */}
          {!custom ? (
            <>
              <Typography size={26} font="m">
                {title}
              </Typography>

              {/* Description */}
              <Typography styles={{ marginTop: "3%" }}>
                {description}
              </Typography>

              {/* Actions */}
              <View style={styles.actions}>
                {/* Left Button */}
                <TouchableOpacity
                  onPress={leftAction}
                  style={styles.actionButton}
                >
                  <Typography color="primary" font="m" size={18}>
                    {leftText}
                  </Typography>
                </TouchableOpacity>

                {/* Right Button */}
                <TouchableOpacity
                  onPress={rightAction}
                  style={styles.actionButton}
                >
                  <Typography color="primary" font="m" size={18}>
                    {rightText}
                  </Typography>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            children
          )}
        </View>
      </BlurView>
    </ModalComponent>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    width: width * 0.9,
    backgroundColor: colors.dark,
    borderRadius: 30,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 2,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "5%",
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});

export default Modal;
