import { colors } from "@/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { styles } from "./styles";
import  { Summary, SummaryProps } from "../Summary";
import { Separator } from "../Separator";

export interface HomeHeaderProps {
  total: string;
  input: SummaryProps
  output: SummaryProps
}

export const HomeHeader = ({input, output, ...data}: HomeHeaderProps) => {
  return (
    <LinearGradient colors={[colors.blue[500], colors.blue[800]]} style={styles.container}>
      <View>
        <Text style={styles.label}>Total que você possui </Text>
        <Text style={styles.total}>{data.total} </Text>
      </View>

      <View style={styles.summary}>
        <Summary data={input} icon={{ name: "arrow-upward", color: colors.green[500] }} />

        <Summary isRight data={output} icon={{ name: "arrow-downward", color: colors.red[400] }} />
      </View>

      <Separator color={colors.blue[400]}/>
    </LinearGradient>
  )
} 