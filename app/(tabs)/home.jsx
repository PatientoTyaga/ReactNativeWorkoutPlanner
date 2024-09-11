import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import ExerciseCalendar from '../../components/ExerciseCalendar'
import CompletedWorkouts from '../../components/CompletedWorkouts'

const Home = () => {

  return (
    <SafeAreaView className='bg-primary'>
      <FlatList 
        data={[{id: 1}, { id:2}, {id:3}]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
            <Text className='text-3xl text-white'>{item.id}</Text>
        )}

        
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>

                <Text className='text-2xl font-psemibold text-white'>Patiento</Text>
              </View>

              <View className='mt-1.5'>
                <Image 
                  source={images.logo}
                  className='w-20 h-14'
                  resizeMode='contain'
                />
              </View>
            </View>
            

            <View className='flex-row space-x-4'>
              <View className='flex-1'>
                <ExerciseCalendar />
              </View>

              <View className='flex-1 bg-gray-700 p-4 rounded-lg'>
                <Text className='text-white text-xl font-semibold mb-2'>
                  Current Workout
                </Text>

                <Text className='text-white text-lg'>
                  Exercise: Push-ups
                </Text>
                <Text className='text-white text-lg'>
                  Sets: 3
                </Text>
                <Text className='text-white text-lg'>
                  Reps: 15
                </Text>
              </View>
            </View>

            <View className= 'w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>Completed Workouts</Text>

              <CompletedWorkouts workouts={ [ {id: 1}, {id: 2}, {id:3} ?? []]}/>
            </View>
          </View>
        )}

        ListEmptyComponent={() => (
          <Text>Empty</Text>
        )}
      />
    </SafeAreaView>
  )
}

export default Home