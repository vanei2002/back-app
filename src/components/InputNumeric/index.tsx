import { Text, TextInput, TextInputProps, View } from "react-native"
import { styles } from "./styles"
import { colors } from "@/theme"
import Input ,{ CurrencyInputProps } from "react-native-currency-input"


interface InputNumericProps extends CurrencyInputProps{
  label: string
}

export const InputNumeric = ({label, ...rest}: InputNumericProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input {...rest} style={styles.input} precision={2} minValue={0} delimiter="," separator="." placeholderTextColor={colors.gray[400]} />
    </View>
  )
}