import { FC } from "react";
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import StyledText from "../Text";

type ButtonVariant = "primary" | "outlined" | "text";

interface IStyledButtonProps {
  disabled?: boolean;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
  prefixIcon?: ImageSourcePropType | undefined;
}

const StyledButton: FC<IStyledButtonProps> = ({
  label,
  onPress,
  style,
  labelStyle,
  disabled = false,
  loading = false,
  variant = "primary",
  prefixIcon,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "outlined":
      case "text":
        return [styles.outlinedContainer, style];

      default:
        return [styles.container, style];
    }
  };

  const getButtonLabelStyle = () => {
    switch (variant) {
      case "outlined":
      case "text":
        return [styles.outlinedText, labelStyle];

      default:
        return [styles.primaryButtonText, labelStyle];
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={getButtonStyle()}
    >
      {prefixIcon && <Image source={prefixIcon} style={styles.prefixIcon} />}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <StyledText text={label} style={getButtonLabelStyle()} />
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  outlinedContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    minHeight: 40,
    marginInline: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  outlinedText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  primaryButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    minHeight: 40,
    backgroundColor: "blue",
    borderRadius: 8,
    marginInline: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  prefixIcon: {
    width: 16,
    height: 16,
  },
});
