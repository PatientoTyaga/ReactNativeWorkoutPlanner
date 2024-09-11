import { View, Text, FlatList } from 'react-native'
import React from 'react'

const CompletedWorkouts = ({ workouts }) => {
  return (
    <FlatList
      data={workouts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className='text-3xl text-white'>{item.id}</Text>
      )}
      horizontal
    >

    </FlatList>
  )
}

export default CompletedWorkouts