import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const Timer = ({ initialTime, onComplete}) => {

  const[timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    let interval;
    if(timeLeft > 0) {
        interval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1)
        }, 1000);
    }else {
        clearInterval(interval);
        onComplete();
    }

    return () => clearInterval(interval);
  }, [timeLeft]);


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  };

  return (
    <View className="bg-gray-900 p-4 rounded-lg mb-4">
      <Text className="text-4xl text-white font-bold text-center">
        {formatTime(timeLeft)}
      </Text>
    </View>
  )
}

export default Timer