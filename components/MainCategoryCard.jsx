import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import SubCategoryList from '../components/SubCategoryList';

const MainCategoryCard = ({ category, subcategories}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <View className='mb-4 bg-gray-800 rounded-lg'>
      <TouchableOpacity onPress={toggleExpand}>
        <View className='flex-row items-center p-4'>
            <Text className='text-lg items-center p-4'>{category} Workout</Text>
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <View className='p-4 bg-gray-700 rounded-b-lg'>
            <SubCategoryList subcategories={subcategories} />
        </View>
      )}
    </View>
  );
};

export default MainCategoryCard