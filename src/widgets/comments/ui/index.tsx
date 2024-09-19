import { View, Text, Keyboard } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "@/shared/ui/Modal";
import Typography from "@/shared/ui/Typography";
import { DarkButton } from "@/shared/ui/Button";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "@/shared/lib/theme";

const ModalComment = ({
  visible = false,
  setVisible,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const [user, setUser] = useState<number>(1);
  const [step, setStep] = useState<1 | 2>(1);
  return (
    <Modal
      visible={visible}
      custom={{
        width: "100%",
        height: step === 1 ? "auto" : "30%",
      }}
    >
      <Typography size={22} font="black">
        {step === 2 ? "Create comment" : "Select a Person"}
      </Typography>
      {step === 1 ? (
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
      ) : (
        <TextInput
          style={{
            backgroundColor: colors.dark,
            fontSize: 18,
            padding: 10,
            borderRadius: 8,
            color: colors.light,
            fontFamily: "m",
            borderWidth: 1,
            borderColor: colors.gray,
            width: "100%",
            height: "60%",
            marginVertical: "5%",
          }}
          multiline={true}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
          placeholder="Text you message here..."
          placeholderTextColor={colors.gray}
        />
      )}
      <DarkButton
        isRoute={false}
        text="Choose"
        disabled={false}
        action={() => {
          if (step === 1) setStep(2);
          else {
            setVisible(!visible);
            setTimeout(() => {
              setStep(1);
            }, 500);
          }
        }}
        bg="blue"
        textColor="light"
      />
    </Modal>
  );
};

export default ModalComment;
