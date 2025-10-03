import { Button, InputNumeric, PageHeaders } from '@/components'
import { Input } from '@/components'
import { router } from 'expo-router'
import { View } from 'react-native'

export default function Target() {
  return (
    <View style={{ flex: 1 , padding: 24}}>
      <PageHeaders 
        title="Detalhes da Meta" 
        subTitle="Acompanhe o progresso da sua meta" 
      />

      <View style={{marginTop: 32, gap: 24}}>
        <Input label="Meta" placeholder="Ex: Economizar para viagem" />
        <InputNumeric label="Valor" value={100.75}  />
        <Button title="Salvar" onPress={() => router.back()} />
      </View>

    </View>
  )
}