import StyledText from "@/src/components/common/Text";
import { IMAGES } from "@/src/constants/images";
import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import CustomInput from "@/src/components/common/Input/CustomInput";
import StyledButton from "@/src/components/common/Button/StyledButton";
import { Link } from "expo-router";

interface SignUpFormPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormPayload>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerImageSection}>
        <Image source={IMAGES.signupBannerImage} style={styles.bannerImage} />
        <StyledText style={styles.bannerImageTitleText} text="Create Account" />
      </View>

      <View style={styles.signUpFormContainer}>
        <CustomInput<SignUpFormPayload>
          control={control}
          fieldName="firstName"
          label="First Name"
          errorMessage={errors?.firstName?.message}
          placeholder="Enter your first name"
          rules={{ required: "First name should not be empty!" }}
        />

        <CustomInput<SignUpFormPayload>
          control={control}
          fieldName="lastName"
          label="Last Name"
          errorMessage={errors?.lastName?.message}
          placeholder="Enter your last name"
        />

        <CustomInput<SignUpFormPayload>
          control={control}
          fieldName="email"
          label="Email Address"
          errorMessage={errors?.email?.message}
          placeholder="Enter your email address"
          rules={{ required: "Email should not be empty!" }}
        />

        <CustomInput<SignUpFormPayload>
          control={control}
          fieldName="password"
          label="Password"
          errorMessage={errors?.password?.message}
          placeholder="Enter a password"
          secureTextEntry
          rules={{
            required: "Password should not be empty!",
            min: "Password should have at least 8 characters!",
            minLength: 8,
          }}
        />

        <StyledButton label="Create account" onPress={handleSubmit(onSubmit)} />

        <Link href={"/(auth)/sign-in"}>
          <StyledText text="Already have an account? " />
          <StyledText style={styles.loginHyperlinkText} text="Login" />
        </Link>

        <View style={styles.dividerLineSection}>
          <View style={styles.dividerLine} />
          <StyledText text="OR" />
          <View style={styles.dividerLine} />
        </View>

        <StyledButton
          label="Login with Google"
          prefixIcon={IMAGES.icons.googleIcon}
          variant="outlined"
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bannerImageSection: {
    position: "relative",
    height: 200,
    width: "100%",
  },
  bannerImage: {
    zIndex: 0,
    width: "100%",
    height: 200,
  },
  bannerImageTitleText: {
    position: "absolute",
    bottom: 8,
    left: 8,
    fontSize: 28,
    fontWeight: "bold",
  },
  signUpFormContainer: {
    padding: 20,
    gap: 16,
  },
  loginHyperlinkText: {
    color: "blue",
    fontWeight: "600",
  },
  dividerLineSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  dividerLine: {
    height: 1,
    flex: 1,
    backgroundColor: "grey",
  },
});
