import StyledButton from "@/src/components/common/Button/StyledButton";
import StyledText from "@/src/components/common/Text";
import { ONBOARDING_SLIDES } from "@/src/constants/data";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);

  const [onboardingIndex, setOnboardingIndex] = useState(0);

  const isLastSlide = onboardingIndex === ONBOARDING_SLIDES.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        style={styles.skipOnboarding}
      >
        <StyledText style={styles.skipOnboardingText} text="Skip" />
      </TouchableOpacity>

      <Swiper
        index={onboardingIndex}
        loop={false}
        dot={<View style={styles.onboardingDot} />}
        activeDot={
          <View style={[styles.onboardingDot, styles.activeOnboardingDot]} />
        }
        onIndexChanged={setOnboardingIndex}
        ref={swiperRef}
      >
        {ONBOARDING_SLIDES.map((slide) => (
          <View key={slide.id} style={styles.onboardingSlideContainer}>
            <Image source={slide.image} style={styles.onboardingSlideImage} />
            <View style={styles.onboardingSlideTextContainer}>
              <StyledText
                style={styles.onboardingSlideTitleText}
                text={slide.title}
              />
              <StyledText
                style={styles.onboardingSlideDescriptionText}
                text={slide.description}
              />
            </View>
          </View>
        ))}
      </Swiper>

      <StyledButton
        label={isLastSlide ? "Get Started" : "Next"}
        labelStyle={styles.onboardingButtonLabelText}
        onPress={() => {
          if (isLastSlide) {
            return router.replace("/(auth)/sign-in");
          }
          swiperRef.current?.scrollBy(1);
        }}
        style={styles.onboardingButton}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipOnboarding: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingInline: 20,
  },
  skipOnboardingText: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Manrope",
  },
  onboardingDot: {
    width: 40,
    height: 4,
    backgroundColor: "grey",
    marginInline: 4,
  },
  activeOnboardingDot: {
    backgroundColor: "blue",
  },
  onboardingSlideContainer: {
    paddingInline: 20,
  },
  onboardingSlideImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  onboardingSlideTextContainer: {
    width: "100%",
  },
  onboardingSlideTitleText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  onboardingSlideDescriptionText: {
    fontSize: 16,
    fontWeight: 500,
    color: "grey",
    textAlign: "center",
  },
  onboardingButton: {
    marginBottom: 16,
  },
  onboardingButtonLabelText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
