import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Bars3CenterLeftIcon,  ShoppingCartIcon } from 'react-native-heroicons/solid'
import { category, FeaturedFruits } from '../Constant'
import FruitCard from '../Components/FruitCard'
import Fruitcardsales from '../Components/Fruitcardsales'

export default function HomeScreens() {
  const [activecategory, setActiveCategory] = useState('orange')
  return (
  
    <SafeAreaView className='flex-1 bg-orange-50 pt-12'>
      {/* top bar */}
      <View className='mx-5 flex-row justify-between items-center'>
       <Bars3CenterLeftIcon size='30' color='black'/>
       <TouchableOpacity className='p-2 rounded-xl bg-orange-100'>
         <ShoppingCartIcon size='25' color='orange'/>
       </TouchableOpacity>
       </View>

      {/* category */}
      <View className='mt-4'>
        <Text style={{color: 'black'}}
        className='text-2xl font-medium ml-5 tracking-widest' 
        >Seasonal</Text>
         <Text style={{color: 'black'}}
        className='text-2xl font-medium ml-5 tracking-widest' 
        >Fruits And Vegetables</Text>
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        className='mt-8 px-5'
        >
          {
            category.map((category, index) => {
              let isActive = category == activecategory
              let textclass = `text-xl ${isActive ? 'font-bold' : ''}`
              return(
              <TouchableOpacity key={index} 
              onPress={()=> setActiveCategory(category)}
              className='mr-8 relative'>
                <Text className={textclass}>{category}</Text>
                {
                  isActive ?
                  <Text className='text-orange-400 font-extrabold -mt-3 ml-2'>___ _</Text>
: null
                }
              </TouchableOpacity>
              )            
 })
          }
        </ScrollView>
      </View>
      {/* fruit carousel */}
      <View className='mt-8'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {
            FeaturedFruits.map((fruit,index )=> <FruitCard key={index} fruit={fruit}/>)
          }
        </ScrollView>
      </View>


      {/* Hot sales */}
      <View className='mt-8 pl-5 space-y-1'>
       <Text className='text-xl font-bold'>Hot Sales</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}>
          {
            [...FeaturedFruits].reverse().map((fruit,index )=> <Fruitcardsales key={index} fruit={fruit}/>)
          }
       </ScrollView>
      </View>
      </SafeAreaView>
  )
}