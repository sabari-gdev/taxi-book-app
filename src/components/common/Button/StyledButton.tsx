import { FC } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import StyledText from "../Text";

interface IStyledButtonProps {
  disabled?: boolean;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const StyledButton: FC<IStyledButtonProps> = ({
  label,
  onPress,
  style,
  labelStyle,
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, style]}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <StyledText text={label} style={labelStyle} />
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    backgroundColor: "blue",
    borderRadius: 8,
    marginInline: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
