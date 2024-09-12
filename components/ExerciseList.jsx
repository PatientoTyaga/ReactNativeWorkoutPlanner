import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const ExerciseList = ({ exercises}) => {

  const [userInputs, setUserInputs] = useState({});

  const handleInputChange = (exerciseId, field, value) => {
    setUserInputs(prev => ({
        ...prev,
        [exerciseId]: {
            ...prev[exerciseId],
            [field]: value
        }
    }));
  };

  return (
    <View>
      {exercises.map((exercise, index) => (
        <View key={index} className="py-2">
          <Text className="text-sm text-gray-300">{exercise.name}</Text>

          {/* Reps Input */}
          <TextInput
            className="text-sm text-gray-300 bg-gray-600 rounded p-2"
            placeholder="Reps"
            keyboardType="numeric"
            value={userInputs[exercise.$id]?.reps || ''} // Access the reps specific to this exercise
            onChangeText={value => handleInputChange(exercise.$id, 'reps', value)} // Update only the reps for this exercise
          />

          {/* Sets Input */}
          <TextInput
            className="text-sm text-gray-300 bg-gray-600 rounded p-2"
            placeholder="Sets"
            keyboardType="numeric"
            value={userInputs[exercise.$id]?.sets || ''} // Access the sets specific to this exercise
            onChangeText={value => handleInputChange(exercise.$id, 'sets', value)} // Update only the sets for this exercise
          />

          {/* Rest Time Input */}
          <TextInput
            className="text-sm text-gray-300 bg-gray-600 rounded p-2"
            placeholder="Rest Time (in seconds)"
            keyboardType="numeric"
            value={userInputs[exercise.$id]?.restTime || ''} // Access the restTime specific to this exercise
            onChangeText={value => handleInputChange(exercise.$id, 'restTime', value)} // Update only the restTime for this exercise
          />

          {/* Save Button */}
          <TouchableOpacity className="bg-blue-500 p-2 mt-2 rounded" onPress={() => console.log('Save', userInputs[exercise.$id])}>
            <Text className="text-white">Save</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

export default ExerciseList