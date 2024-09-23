import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import StarRating from 'react-native-star-rating-widget'

export default function Productscreen(props) {
    let fruit = props.route.params
    const navigation = useNavigation()
  return (
    <View className='flex-1' style={{ backgroundColor: fruit.color}}>
        <SafeAreaView className='mt-6'>
            <View className='flex-row justify-start mx-5'>
        <TouchableOpacity onPress={()=> navigation.goBack()} className='border border-gray-50 rounded-xl'
        style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
            <ChevronLeftIcon size='40' color='white'/>
        </TouchableOpacity>
            </View>
            <View className='flex row justify-center items-center mt-5 pb-10'
            style={{
                shadowColor: fruit.shadow,
                shadowRadius: 40,
                shadowOpacity: 0.6,
                shadowOffset: {width: 0, height: 50},}}>
                <Image source={fruit.image} style={{width: 290, height: 180, resizeMode: 'contain'}}/>
            </View>
        </SafeAreaView>
        <View className='bg-orange-50 flex-1 px-6 space-y-2'
        style={{borderTopLeftRadius: 45, borderTopRightRadius: 45}}>
         <Text className='mt-8 text-2xl font-bold'>
            {fruit.name}
         </Text>
         <View className='flex-row justify-between mb-3'>
            <Text className='text-gray-500 font-semibold'>{fruit.desc}</Text>
            <Text className='text-gray-500 font-semibold'>Sold
                <Text className='text-gray-800 font-extrabold'> {fruit.stars}</Text>
            </Text>
         </View>
         <StarRating 
         disabled={true}
         maxStars={5}
         rating={fruit.stars}
         starStyle={{color: 'yellow'}}
         emptyColor='#ccc'
         onChange={rating => console.log(rating)}
         />
         <View showsVerticalScrollIndicator={false} style={{height: 200}}>
            <Text className="tracking-wide py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, laudantium blanditiis! Officiis id dicta excepturi inventore itaque neque dolores et delectus, fuga culpa reiciendis laudantium minima quam, corrupti, animi nihil earum expedita? Quod fugiat maiores inventore, sunt nisi aperiam pariatur temporibus modi a, neque ipsam earum asperiores. Laudantium, expedita eum.
                </Text>
         </View>
         <View className='flex-row justify-between items-center'>
            <Text className='text-3xl'>{fruit.price}</Text> 
            <TouchableOpacity className='text-3xl p-3 ml-6 flex-1 rounded-xl'
            onPress={() => navigation.navigate('Cart')}
            style={{
                backgroundColor: fruit.shadow,
                shadowColor: fruit.shadow,
                shadowOpacity: 0.5,
                shadowRadius: 25,
                shadowOffset: {width: 0, height: 15},
            }}
            >
            <Text className='text-xl text-center text-white'>Add to cart</Text>
            </TouchableOpacity>
         </View>
        </View>
    </View>
  )
}