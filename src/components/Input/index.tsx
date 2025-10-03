import { Text, TextInput, TextInputProps, View } from "react-native"
import { styles } from "./styles"
import { colors } from "@/theme"


interface InputProps extends TextInputProps{
  label: string
}

export const Input = ({label, ...rest}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput {...rest} style={styles.input} placeholderTextColor={colors.gray[400]} />
    </View>
  )
}