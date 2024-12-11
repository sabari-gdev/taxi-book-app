import { FC } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface IStyledTextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

const StyledText: FC<IStyledTextProps> = ({ text, style }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

export default StyledText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Manrope",
  },
});
