import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

export interface TargetProps {
  id?: string;
  name: string;
  porcentage: string;
  current: string;
  target: string;
}

type Props = {
  data: TargetProps;
}

export const Target = ({ data }: Props) => {

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>{data.name}</Text>
      
        <Text style={styles.status}>
          {data.porcentage} • {data.current} de {data.target}
        </Text>
      </View>
      <MaterialIcons name="chevron-right" size={20} />
    </TouchableOpacity>
  )
}