import { SafeAreaView, Text, View } from 'react-native'

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
      <View className="flex-1 p-6">
        <Text className="text-neutral-950 dark:text-white">Home screen</Text>
      </View>
    </SafeAreaView>
  )
}
