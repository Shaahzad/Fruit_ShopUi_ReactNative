import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { HeartIcon } from 'react-native-heroicons/solid'

export default function FruitCard({fruit}) {
    const [isfav, setIsFav] = useState(false)
  return (
    <View className='mx-5' style={{width: 270, borderRadius: 40, backgroundColor: fruit.color(1)}}>
        <View className='flex-row justify-end '>
            <TouchableOpacity 
            onPress={() => setIsFav(!isfav)}
            className='p-3 rounded-full mr-4 mt-4'
            style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
            >
                <HeartIcon size='25' color={isfav ? fruit.shadow : 'white'}/>
            </TouchableOpacity>
        </View>
     <View className='flex-row justify-center'
     style={{
        shadowColor: fruit.shadow,
        shadowRadius: 40,
        shadowOpacity: 0.6,
        shadowOffset: {width: 0, height: 50},
     }}
     >
    <Image source={fruit.image} style={{width: 260, height: 210, borderRadius: 40, resizeMode: 'contain', 
     marginTop: 10  
    }}/>
    </View>
    <View className="ml-4 my-4">
    <Text className="font-bold text-xl text-white shadow">
    {fruit.name}
    </Text>
    <Text className="font-bold text-lg text-white shadow tracking-wide">
    {fruit.price}
    </Text>
    </View>
    </View>
  )
}