import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import SubCategoryList from '../components/SubCategoryList';
import AddButton from './AddButton'

const MainCategoryCard = ({ category, subcategories}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <View className='mb-4 bg-gray-800 rounded-lg'>
      <TouchableOpacity onPress={toggleExpand}>
        <View className='flex-row items-center p-4'>
            <Text className='text-lg items-center p-4 font-bold text-white'>{category} Workout</Text>
            <AddButton isExpanded={isExpanded} />
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <View className='p-4 bg-gray-700 rounded-b-lg h-[300px]'>
          <ScrollView>
            <SubCategoryList subcategories={subcategories} />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default MainCategoryCard