import { HomeHeader, List, Separator, Target, TargetProps } from '@/components'
import { colors } from '@/theme'
import { View } from 'react-native'

const summary = {
  input: {
    label: "Entradas",
    value: "R$ 17.400,00"
  },
  output: {
    label: "Saídas",
    value: "-R$ 14.800,00"
  },
  total: "R$ 2.870,00"
}

const targets = [
  {
     id: "1",
        name: "Meta 1",
        porcentage: "50%",
        current: "R$ 8.700,00",
        target: "R$ 17.400,00"
  },
  {
      id: "2",
      name: "Meta 2",
      porcentage: "30%",
      current: "R$ 5.220,00",
      target: "R$ 17.400,00",
  }
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader {...summary}/>
      <List<TargetProps> 
        data={targets} 
        title="Metas"
        keyExtractor={item => item.id}
        emptyMessage="Nenhuma meta encontrada"
        renderItem={({ item }) => (
          <Target data={item} />
        )}
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  )
}