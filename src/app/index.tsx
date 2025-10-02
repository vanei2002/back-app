import { Button, HomeHeader, List,Target, TargetProps } from '@/components'
import { router } from 'expo-router'
import { StatusBar, View } from 'react-native'

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

const targets: TargetProps[] = [
  {
    id: "1",
    name: "iPhone 16 Pro",
    porcentage: "42%",
    current: "R$ 7.850,00",
    target: "R$ 15.900,00"
  },
  {
    id: "2",
    name: "Notebook Gamer",
    porcentage: "75%",
    current: "R$ 9.320,00",
    target: "R$ 22.600,00"
  },
  {
    id: "3",
    name: "Viagem para Europa",
    porcentage: "28%",
    current: "R$ 2.800,00",
    target: "R$ 18.500,00"
  },
  {
    id: "4",
    name: "Moto Nova",
    porcentage: "55%",
    current: "R$ 5.600,00",
    target: "R$ 20.000,00"
  },
  {
    id: "5",
    name: "Curso de Inglês",
    porcentage: "10%",
    current: "R$ 1.200,00",
    target: "R$ 12.000,00"
  }
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <HomeHeader {...summary}/>
      <List<TargetProps> 
        data={targets} 
        title="Metas"
        keyExtractor={item => item.id}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
        renderItem={({ item }) => (
          <Target data={item} onPress={() => router.navigate(`/in-progress/${item.id}`)} />
        )}
        containerStyle={{ paddingHorizontal: 24 }}
      />

      

      <View style={{padding: 24, paddingBottom:32}}>
        <Button
        title="Nova Meta"
        onPress={() => router.navigate('/target')}
      />
      </View>
    </View>
  )
}