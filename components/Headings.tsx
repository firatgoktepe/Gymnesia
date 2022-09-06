import { Text, TextProps } from "./Themed";
import Colors from "../constants/Colors";

export function HeadingText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "inter-regular",
          fontWeight: "bold",
          fontSize: 22,
        },
      ]}
    />
  );
}
