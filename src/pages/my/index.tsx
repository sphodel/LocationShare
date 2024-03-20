import {useState} from "react";
import {View, Text, Input,Image,Button} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import './index.css'

export default function Index() {
  const [avatar,setAvatar]=useState("0.png")
  const [NickName,setNickName]=useState("微信用户")
  const onChooseAvatar=(e)=>{
    setAvatar(e.detail.avatarUrl)
  }
  const handleName=(e)=>{
    setNickName(e.detail.value)
  }
  useLoad(() => {
    console.log('Page loaded.')
  })
  return (
    <View className='h-screen bg-[#F2F2F2] pt-3'>
      <View className='h-32 w-11/12 bg-white rounded-xl flex flex-col m-auto'>
      <View className='flex-1 flex items-center pl-3 gap-48'>
        <Text>头像</Text>
        <Button open-type='chooseAvatar' onChooseAvatar={onChooseAvatar} className='w-12 h-12 rounded-full p-0'>
        <Image src={avatar} className='w-12 h-12 rounded-full' />
        </Button>
      </View>
      <View className='flex-1 flex items-center '>
        <Text className='flex pl-3 w-full'>昵称</Text>
        <Input type='nickname' value={NickName} onInput={handleName} className='flex w-auto text-right pr-9' />
      </View>
      </View>
    </View>
  )
}
