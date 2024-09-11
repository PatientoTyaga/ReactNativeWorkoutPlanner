import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({category, exercises, imageSource}) => {

  const [isExpanded, setIsExpanded] = useState(false)
  

  //this will expand to show list of exercises
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <View className='mb-4 bg-gray-800 rounded-lg'>
        <TouchableOpacity onPress={toggleExpand}>
            <View className='flex-row items-center p-4'>
                <Image source={imageSource} className='w-12 h-12 mr-4' />

                <Text className='text-lg text-white'>{category}</Text>

                //add button for expansion added here

            </View>

        </TouchableOpacity>

        {isExpanded && (
            <View className='p-4 bg-gray-700 rounded-b-lg'>
                // add exercise list here i.e ExerciseList exercises= exercises
            </View>
        )}

    </View>
  )
}

export default CategoryCard