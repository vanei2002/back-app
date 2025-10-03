import { Text, TouchableOpacity, View } from "react-native"
import {MaterialIcons} from '@expo/vector-icons'
import { styles } from "./style";
import { router } from "expo-router";
import { colors } from "@/theme";

interface PageHeadersProps {
  title: string;
  subTitle?: string;
  rightButton?: {
    onPress: () => void;
    icon: keyof typeof MaterialIcons.glyphMap;
  }
}

export const PageHeaders = ({title, subTitle, rightButton}:PageHeadersProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.black} />
        </TouchableOpacity>

      {rightButton && (
        <TouchableOpacity activeOpacity={0.8} onPress={rightButton.onPress}>
          <MaterialIcons name={rightButton.icon} size={24} color={colors.gray[500]} />
        </TouchableOpacity>
      )}
      </View>

      <Text style={styles.title}>{title}</Text>
      {subTitle &&  <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  )
}