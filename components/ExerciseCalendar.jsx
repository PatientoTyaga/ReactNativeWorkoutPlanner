import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars'
import { View, StyleSheet, ScrollView } from 'react-native'

const ExerciseCalendar = () => {

    const [markedDates, setMarkedDates] = useState({
        '2024-09-10': { marked: true, dotColor: 'green' },
        '2024-09-11': { marked: true, dotColor: 'green' }
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                <Calendar
                    current={'2024-09-10'}
                    markedDates={markedDates}
                    markingType={'simple'}
                    style={styles.calendar}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#333',
                        textSectionTitleColor: '#fff',
                        dayTextColor: '#fff',
                        todayTextColor: '#00adf5',
                        selectedDayTextColor: '#fff',
                        arrowColor: 'white',
                        textDayFontWeight: '300',
                        textDayHeaderFontWeight: '300',
                        arrowStyle: {
                            padding: 10, // Adjust padding around arrows
                          },
                        'stylesheet.calendar.header': {
                            header: {
                                flexDirection: 'row',
                                justifyContent: 'center', // Center the entire <Month Year> block
                                alignItems: 'center',
                                paddingHorizontal: 10,
                            },
                            monthText: {
                                fontSize: 13,
                                fontWeight: 'bold',
                                color: '#fff',
                                textAlign: 'center',
                                marginHorizontal: 10, // Add space between arrows and text
                            },
                        },
                    }}
                    onDayPress={(day) => {
                        setMarkedDates({
                            ...markedDates,
                            [day.dateString]: { marked: true, dotColor: 'green' },
                        });
                    }}
                />
            </ScrollView>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
      height: 250, // Set the height of the container
      overflow: 'hidden', // Ensure the content doesn't overflow the view
      borderRadius: 10
    },
    calendar: {
      flex: 1, // Allow the calendar to take full height inside ScrollView
    },
  });

export default ExerciseCalendar