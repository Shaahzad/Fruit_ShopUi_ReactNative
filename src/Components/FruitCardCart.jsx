import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid'

export default function FruitCardCart({fruit}) {
  return (
    <View className='flex-row items-center justify-between space-x-5 mb-2'>
    <View className='ml-7'>
      <TouchableOpacity className='flex-row -mb-10 -ml-8 shadow-lg z-20'>
        <Image source={fruit.image} style={{width: 65, height: 65, sizeMode: 'contain',
        shadowColor: fruit.shadow,
        overflow: 'visible',
        shadowRadius: 15,
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.5
        }}
        />
      </TouchableOpacity>
      <View style={{backgroundColor: fruit.color(0.4), width: 60, height: 60}}
      className='rounded-3xl flex justify-end items-center'>
      </View>
    </View>
    <View className='flex-1 space-y-1'>
<Text className='text-base font-bold'>{fruit.name}</Text>
<Text className='text-yellow-500 font-extrabold'>{fruit.price}</Text>
    </View>
    <View className='flex-row items-center space-x-2'>
        <TouchableOpacity className='p-1 rounded-lg bg-gray-300'>
            <PlusIcon size='20' color='white'/>
        </TouchableOpacity>
        <Text>{fruit.qty}</Text>
        <TouchableOpacity className='p-1 rounded-lg bg-gray-300'>
            <MinusIcon size='20' color='white'/>
        </TouchableOpacity>
    </View>
    </View>
  )
}