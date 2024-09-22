import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Bars3CenterLeftIcon,  ShoppingCartIcon } from 'react-native-heroicons/solid'

export default function HomeScreens() {
  return (
    <SafeAreaView className='flex-1 bg-orange-50'>
      {/* top bar */}
      <View className='mx-5 flex-row justify-between items-center'>
       <Bars3CenterLeftIcon size={30} color='black'/>
       <TouchableOpacity className='p-2 rounded-xl bg-orange-100'>
         <ShoppingCartIcon size='25' color='orange'/>
       </TouchableOpacity>
      </View>

      {/* category */}
      <View className='mt-4'>
        <Text style={{color: 'black'}}
        className='text-2xl font-medium ml-5 tracking-widest' 
        >Seasonal</Text>
      </View>
    </SafeAreaView>
  )
}