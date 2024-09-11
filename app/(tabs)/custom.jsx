import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from '../../components/CategoryCard';
import { images } from '../../constants'


const Custom = () => {


  const workoutCategories = [
    { category: 'Chest', exercises: ['Bench Press', 'Push-ups'], imageSource: images.chest },
    { category: 'Back', exercises: ['Pull-ups', 'Deadlifts'], imageSource: images.back },
    { category: 'Shoulders', exercises: ['Shoulder Press'], imageSource: images.shoulders },
  ];

  return (
    <ScrollView className='bg-primary'>
      <View className='p-4'>
        {workoutCategories.map((categoryData, index) => (
          <CategoryCard 
            key={index}
            category={categoryData.category}
            exercises={categoryData.exercises}
            imageSource={categoryData.imageSource}
          />
        ))}
      </View>

    </ScrollView>
  )
}

export default Custom