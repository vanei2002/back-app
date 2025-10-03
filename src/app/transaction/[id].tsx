import { InputNumeric, PageHeaders, TransactionType } from '@/components'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { TransactionTypes } from '@/utils/TransactionTypes'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>()

  const [types, setTypes] = useState<TransactionTypes>(TransactionTypes.Input)

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeaders
        title="Nova transação"
        subTitle="A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."
        />


      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType selected={types} onChange={setTypes} />
        
        <InputNumeric label="Valor (R$)" value={0} />

        <Input
          label="Motivo"
          placeholder="Ex: Investir em CDB de 110% no banco XPTO"
        />

        <Button title="Salvar" />
      </View>
    </View>
  )
}