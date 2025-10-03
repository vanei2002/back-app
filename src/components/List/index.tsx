import { View, FlatList, FlatListProps, StyleProp, Text, ViewStyle } from "react-native";
import { styles } from "./styles";
import { Separator } from "../Separator";
import { colors } from "@/theme";


interface Props<T> extends FlatListProps<T> {
  title: string;
  emptyMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const List = <T,> ({ title, emptyMessage, containerStyle, ...props }: Props<T>) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={props.data}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator color={colors.gray[200]}/>}
        renderItem={props.renderItem}
        ListEmptyComponent={<Text style={styles.empty}>
          {emptyMessage}
        </Text>}
      />
    </View>
  );
}