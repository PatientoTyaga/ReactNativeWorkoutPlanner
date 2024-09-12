import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Exercise = ({ exerciseName, reps, sets, restTime, onCompleteExercise }) => {

  const [remainingSets, setRemainingSets] = useState(sets);
  const [isResting, setIsResting] = useState(false);

  const completeSet = () => {
    if(remainingSets > 1) {
        setRemainingSets(remainingSets - 1);
        setIsResting(true);
    }else {
        onCompleteExercise();
    }
  };

  const handleRestComplete = () => {
    setIsResting(false);
  };

  return (
    <View className='mb-4 bg-gray-800 p-4 rounded-lg'>
      <Text className='text-xl text-white font-semibold mb-2'>{exerciseName}</Text>

      <Text className='text-white mb-2'>Reps: {reps}</Text>
      <Text className='text-white mb-2'>Remaining Sets: {remainingSets}</Text>

      {isResting ? (
        <Timer initialTime={restTime} onComplete={handleRestComplete}/>
      ) : (

        remainingSets > 0 && <Button title="Complete Set" onPress={completeSet}/>
      )}

      {remainingSets === 0 && <Text className='text-green-400'>Exercise Completed</Text>}
    </View>
  )
}

export default Exercise