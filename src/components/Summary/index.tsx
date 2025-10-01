import { ColorValue, Text, View } from "react-native";
import { styles } from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export interface SummaryProps {
  label: string;
  value: string;
}

interface Props {
  data: SummaryProps;
  icon: {
    name: keyof typeof MaterialIcons.glyphMap;
    color: ColorValue;
  },
  isLeft?: boolean;
}

export const Summary = ({ data,icon, isLeft = false }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, isLeft && {
        justifyContent: 'flex-end',
      }]}>
        <MaterialIcons name={icon.name} color={icon.color} size={16} />
        <Text style={styles.label}>{data.label}</Text>
      </View>

      <Text style={styles.value}>{data.value}</Text>
    </View>
  );
}