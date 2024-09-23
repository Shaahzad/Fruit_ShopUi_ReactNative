import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Fruitcardsales({fruit}) {
  const nvigation = useNavigation()
  return (
    <View className='mr-6'>
      <TouchableOpacity className='flex-row justify-center -mb-9 shadow-lg z-20'
      onPress={() => nvigation.navigate('Product', {...fruit, color: fruit.color(1)})}
      >
        <Image source={fruit.image} style={{width: 65, height: 65,
        shadowColor: fruit.shadow,
        overflow: 'visible',
        shadowRadius: 15,
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.5
        }}
        />
      </TouchableOpacity>
      <View style={{backgroundColor: fruit.color(0.4), width: 80, height: 75}}
      className='rounded-3xl flex justify-end items-center'
      >
      <Text className='font-semibold text-gray-800 text-center pb-3 tracking-wide'>{fruit.price}</Text>
      </View>
    </View>
  )
}