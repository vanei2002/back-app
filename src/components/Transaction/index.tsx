import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { colors } from '@/theme'
import { TransactionTypes } from '@/utils/TransactionTypes'

export type TransactionProps = {
  id: string
  value: string
  date: string
  description?: string
  type: TransactionTypes
}


export function Transaction({  onRemove, ...data }: TransactionProps & { onRemove: () => void}) {
  
  const isInput = data.type === TransactionTypes.Input
  
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={
          isInput
            ? 'arrow-upward'
            : 'arrow-downward'
        }
        size={20}
        color={
          isInput
            ? colors.blue[500]
            : colors.red[400]
        }
      />

      <View style={styles.info}>
        <Text style={styles.value}>{data.value}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {data.date} {data.description && `• ${data.description}`}
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
        <MaterialIcons name="close" size={18} color={colors.gray[500]} />
      </TouchableOpacity>
    </View>
  )
}