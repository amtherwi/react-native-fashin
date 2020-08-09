import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { Theme } from "./Theme";
import { Text } from './Theme'

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>()
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.secondary ;
  const color = variant === "primary" ? theme.colors.white : theme.colors.body;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="textButton" style={ { color }}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },

});

Button.defaultProps = { variant: "default" };

export default Button;
