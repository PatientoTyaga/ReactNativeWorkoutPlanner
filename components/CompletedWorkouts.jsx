import { View, Text, FlatList } from 'react-native'
import React from 'react'
import EmptyState from './EmptyState'

const CompletedWorkouts = ({ workouts }) => {
  return (
    <FlatList
      data={workouts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className='text-3xl text-white'>{item.id}</Text>
      )}
      horizontal

      ListEmptyComponent={() => (
        <EmptyState
          title='No Saved Workouts'
          subtitle='Create and save a workout.'
        />
      )}
    >

    </FlatList>
  )
}

export default CompletedWorkouts