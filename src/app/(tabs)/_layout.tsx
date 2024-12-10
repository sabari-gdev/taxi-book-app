import { Tabs } from "expo-router";
import { FC } from "react";

const TabLayout: FC = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
    </Tabs>
  );
};

export default TabLayout;
