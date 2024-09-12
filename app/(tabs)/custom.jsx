import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryCard from '../../components/CategoryCard';
import { images } from '../../constants';
import { fetchExercises } from '../../lib/appwrite';


const Custom = () => {

  const [workoutCategories, setWorkoutCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExercises = async () => {
      try {
        const exercises = await fetchExercises();
        
        // Group exercises by category and muscle group
        const categories = exercises.reduce((acc, exercise) => {
          const { category, muscleGroup, name, $id } = exercise;

          // Combine category and muscle group as the key, e.g., 'Chest (inner)'
          const fullCategory = `${category} (${muscleGroup})`;

          // Check if the category already exists
          if (!acc[fullCategory]) {
            acc[fullCategory] = {
              category: fullCategory,
              exercises: [],
              imageSource: images[category.toLowerCase()] // Map image to category
            };
          }

          // Add the exercise to the correct category
          acc[fullCategory].exercises.push({ $id, name });
          return acc;
        }, {});

        setWorkoutCategories(Object.values(categories)); // Update the state with the grouped categories

      } catch (error) {
        setError('Failed to load exercises'); // Handle any errors that occur
        console.error('Error:', error);
      }
    };

    getExercises();
  }, []);

  if (error) {
    return <Text>{error}</Text>; // Display error message
  }

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