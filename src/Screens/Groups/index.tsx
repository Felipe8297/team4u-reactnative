import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@/components/Button'

export function Groups() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Team4u</Text>
      <Button />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
})
