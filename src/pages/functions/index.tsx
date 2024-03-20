import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View>
      <Text>功能</Text>
    </View>
  )
}
