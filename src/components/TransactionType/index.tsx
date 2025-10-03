import { TransactionTypes } from '@/utils/TransactionTypes'
import { View } from 'react-native'
import { styles } from './styles'
import { Option } from './option'
import { colors } from '@/theme'

type Props = {
  selected: TransactionTypes
  onChange: (type: TransactionTypes) => void
}

export function TransactionType({ selected, onChange }: Props) {

  const isSelected = selected === TransactionTypes.Input

  return (
    <View style={styles.container}>
      <Option
        icon="arrow-upward"
        title="Guardar"
        isSelected={isSelected}
        selectedColor={colors.blue[500]}
        onPress={() => onChange(TransactionTypes.Input)}
      />
      <Option
        icon="arrow-downward"
        title="Resgatar"
        isSelected={!isSelected}
        selectedColor={colors.red[400]}
        onPress={() => onChange(TransactionTypes.Output)}
      />
    </View>
  )
}