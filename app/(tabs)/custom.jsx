import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { images } from '../../constants';
import { fetchExercises } from '../../lib/appwrite';
import MainCategoryCard from '../../components/MainCategoryCard';


const Custom = () => {

  const [workoutCategories, setWorkoutCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExercises = async () => {
      try {
        const exercises = await fetchExercises();
        
        // Group exercises by category and muscle group
        const mainCategories = exercises.reduce((acc, exercise) => {
          const { category, muscleGroup, name, $id } = exercise;

          if(!acc[category]) {
            acc[category] = {
              category,
              subcategories: {},
              imageSource: images[category.toLowerCase()],
            };
          }

          // Combine category and muscle group as the key, e.g., 'Chest (inner)'
          const subcategory = `${category} (${muscleGroup})`;

          // Check if the category already exists
          if (!acc[category].subcategories[subcategory]) {
            acc[category].subcategories[subcategory] = {
              subcategory,
              exercises: [],
            };
          }

          // Add the exercise to the correct category
          acc[category].subcategories[subcategory].exercises.push({ $id, name, muscleGroup});
          return acc;
        }, {});

        setWorkoutCategories(Object.values(mainCategories)); // Update the state with the grouped categories

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
        {workoutCategories.map((mainCategoryData, index) => (
          <MainCategoryCard 
            key={index}
            category={mainCategoryData.category}
            subcategories={mainCategoryData.subcategories}
            imageSource={mainCategoryData.imageSource}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default Custom