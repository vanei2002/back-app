import { PageHeaders } from '@/components'
import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function Target() {
  return (
    <View style={{ flex: 1 , padding: 24}}>
      <PageHeaders 
        title="Detalhes da Meta" 
        subTitle="Acompanhe o progresso da sua meta" 
      />
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}