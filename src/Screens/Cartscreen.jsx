import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { cartItem } from '../Constant'
import FruitCardCart from '../Components/FruitCardCart'
export default function Cartscreen(props) {
    let fruit = props.route.params
    const navigation = useNavigation()
  return (
    <SafeAreaView className='flex-1 flex justify-between bg-orange-50'>
 <View className='flex-row justify-start mx-5 mt-14'>
        <TouchableOpacity onPress={()=> navigation.goBack()} className='border border-gray-300 rounded-xl'>
            <ChevronLeftIcon size='40' color='gray'/>
        </TouchableOpacity>
            </View>
            <View className='mx-5 flex-1'>
              <Text className='text-2xl py-10'>
                Your <Text className='font-bold'>Cart</Text>
              </Text>
              <View>
                {
                    cartItem.map((fruit, index)=> <FruitCardCart key={index} fruit={fruit}/>)
                    
                }
              </View>

<View className='flex-row justify-end py-6 pb-10'>
    <Text className='text-lg'>Total Price:
     <Text className='text-yellow-500 font-bold'> $ 2000</Text>
    </Text>
</View>


              <View className='flex-row justify-center mx-7'>
              <TouchableOpacity 
              style={{
               backgroundColor: 'orange',
               opacity: 1,
               shadowColor: 'orange',
               shadowRadius: 40,
               shadowOffset: {width: 0, height: 15},
               shadowOpacity: 0.5
        }} className='p-3 flex-1 rounded-xl'>
                <Text className='text-xl text-center text-white font-bold'>Payment</Text>
              </TouchableOpacity>
              </View>
            </View>
    </SafeAreaView>
  )
}