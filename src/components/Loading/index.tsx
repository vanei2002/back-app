import { colors } from '@/theme/colors'
import { ActivityIndicator } from 'react-native'
import { styles } from './styles'

export const Loading = () => {
  return <ActivityIndicator color={colors.blue[500]} style={styles.container} />
}