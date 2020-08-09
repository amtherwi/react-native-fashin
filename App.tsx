import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import { Onboarding, Welcome } from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};
const AuthentiactionStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthentiactionStack.Navigator headerMode="none">
      <AuthentiactionStack.Screen name="Onboarding" component={Onboarding} />
      <AuthentiactionStack.Screen name="Welcome" component={Welcome} />
    </AuthentiactionStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
