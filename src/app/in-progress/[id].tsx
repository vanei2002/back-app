import { Button, List, PageHeaders, Progress, ProgressProps, Transaction, TransactionProps } from '@/components'
import { TransactionTypes } from '@/utils/TransactionTypes'
import {  router, useLocalSearchParams } from 'expo-router'
import { View } from 'react-native'

const details: ProgressProps = {
  target: "R$ 580,00",
  current: "R$ 19200,00",
  percentage: 20
}


const transactions: TransactionProps[] = [
  {
    id: '1',
    value: 'R$ 200,00',
    type: TransactionTypes.Input,
    date: '10/10/2023',
    description: 'Salário'
  },
  {
    id: '2',
    value: 'R$ 50,00',
    type: TransactionTypes.Output,
    date: '11/10/2023',
    description: 'Mercado'
  }
]

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1,  padding: 24, gap: 32}}>
      <PageHeaders 
        title="Em Desenvolvimento" 
        rightButton={{
          icon: 'edit',
          onPress: () => {}
        }}
      />

      <Progress {...details} />

      <List<TransactionProps>
        title='Transações'
        data={transactions}
        renderItem={({ item }) => <Transaction {...item} onRemove={() => {}}/>}
        emptyMessage='Nenhuma transação encontrada.'
      />

      <Button title='Nova Transação' onPress={() => {router.navigate(`/transaction/${params.id}`)}} />
    </View>
  )
}