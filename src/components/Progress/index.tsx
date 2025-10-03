import { Text, View } from "react-native"
import { styles } from "./styles"

export interface ProgressProps {
  target: string
  percentage: number
  current: string
}


export const Progress = (props: ProgressProps) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>Valor guardado</Text>
      <View style={styles.status}>
        <Text style={styles.value}>
          {props.current}

          <Text style={styles.target}> de {props.target}</Text>  
        </Text>

        <Text style={styles.percentage}>
          {props.percentage.toFixed(0)}%
        </Text>
      </View>

      <View style={styles.progress}>
        <View style={[styles.currentProgress, { width: `${props.percentage}%` }]} />
      </View>

    </View>
  )
}