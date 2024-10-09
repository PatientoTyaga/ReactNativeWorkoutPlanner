import { View, Text, ScrollView, FlatList, Image, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';
import { images } from '../../constants';
import { fetchExercises } from '../../lib/appwrite';
import MainCategoryCard from '../../components/MainCategoryCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import CompletedWorkouts from '../../components/CompletedWorkouts';

const Custom = () => {

  const [workoutCategories, setWorkoutCategories] = useState([]);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }

  const fetchData = async () => {

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

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <Text>{error}</Text>; // Display error message
  }

  return (
    <SafeAreaView className='bg-primary'>

      <FlatList 

        ListHeaderComponent={() => (
          <View className= 'my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-lg text-white font-pbold'>Create Your</Text>
                <Text className='font-pmedium text-lg text-white font-pbold'>Workout</Text>

              </View>

              <View className='mt-1.5'>
                <Image 
                  source = {images.logo}
                  className='w-12 h-12'
                  resizeMode = 'contain'
                />
              </View>
            </View>


            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>Saved Workouts</Text>

              <CompletedWorkouts workouts ={[]}/>
            </View>

            <Text className='text-gray-100 text-lg font-pregular mb-2'>Workout Categories</Text>
          </View>
        )}
      
        data = {workoutCategories}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <View className='p-4'>
            <MainCategoryCard 
              category={item.category}
              subcategories={item.subcategories}
              imageSource={item.imageSource}
            />
          </View>
          
        )}

        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
      
    </SafeAreaView>
  )
}

export default Custom