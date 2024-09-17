import { View, Text } from 'react-native'
import React from 'react'
import ExerciseList from './ExerciseList';

const SubCategoryList = ({ subcategories = {} }) => {

  return (
    <View>
        {Object.values(subcategories).map((subcategory, index) => (
            <View key={index} className='mb-2'>
                <Text className='text-xl text-gray-200'>{subcategory.subcategory}</Text>
                <ExerciseList exercises={subcategory.exercises} />
            </View>
        ))}
    </View>
  );
};

export default SubCategoryList