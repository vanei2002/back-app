import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isProcessing?: boolean;
}

export const Button = ({ title, isProcessing = false , ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.8}
      disabled={isProcessing}
      {...rest}
    >
      <Text style={styles.title}>
        {isProcessing ? <ActivityIndicator size="small" color={colors.white} /> : title}
      </Text>
      </TouchableOpacity>
    )
}