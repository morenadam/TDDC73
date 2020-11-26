import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProjectScreen from '../screens/ProjectScreen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#424BA1',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Top GitHub Projects'}}
      />
      <Stack.Screen
        name="Project"
        component={ProjectScreen}
        options={({route}) => ({
          title: route.params.project.number
            ? `Project ${route.params.project.number}: ${route.params.project.title}`
            : route.params.project.title,
        })}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
