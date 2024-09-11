import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AddButton = ({ isExpanded }) => {
  return (
    <TouchableOpacity className='absolute right-4 top-4'>
        <Text className='text-2xl text-white'> {isExpanded ? '-' : '+' } </Text>
    </TouchableOpacity>
  )
}

export default AddButton