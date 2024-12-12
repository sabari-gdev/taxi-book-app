import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

import StyledText from "../Text";

interface ICustomInputProps<T extends FieldValues> {
  label: string;
  fieldName: Path<T>;
  placeholder?: string;
  secureTextEntry?: boolean | undefined;
  control?: Control<T> | undefined;
  rules?:
    | Omit<
        RegisterOptions<T, Path<T>>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  errorMessage?: string;
}

const CustomInput = <T extends FieldValues>({
  label,
  fieldName,
  control,
  placeholder,
  rules,
  errorMessage,
  secureTextEntry = false,
}: ICustomInputProps<T>) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <StyledText style={styles.inputLabelText} text={label} />
          <Controller
            control={control}
            name={fieldName}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={styles.inputContainer}
                value={value}
              />
            )}
            rules={rules}
          />
          {errorMessage && (
            <StyledText style={styles.errorText} text={errorMessage} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputLabelText: {
    fontWeight: "600",
    marginBottom: 8,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "grey",
    minHeight: 48,
    padding: 8,
  },
  errorText: {
    fontSize: 12,
    color: "red",
  },
});
