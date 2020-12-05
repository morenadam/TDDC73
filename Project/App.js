import React from 'react';
import {View} from 'react-native';
import StepsLeftUsage from './src/StepsLeftUsage';
import Carousel from './src/SDK/Carousel';

const data = [
  {
    img:
      'https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg',
    title: 'Breakfast Club',
  },
  {
    img:
      'https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg',
    title: 'Brunch',
  },
  {
    img:
      'https://image.freepik.com/free-photo/north-indian-thali-tipical-meal-served-stainless-steel-plate-blue-table_107467-1331.jpg',
    title: 'Nice Guys',
  },
  {
    img:
      'https://image.freepik.com/free-photo/fried-eggs-drinks-breakfast_23-2147758279.jpg',
    title: 'Breakfast Club part 2',
  },
  {
    img:
      'https://image.freepik.com/free-photo/indian-masala-egg-omelet_136595-191.jpg',
    title: 'Brunch',
  },
  {
    img:
      'https://image.freepik.com/free-photo/north-indian-thali-tipical-meal-served-stainless-steel-plate-blue-table_107467-1331.jpg',
    title: 'Lunch',
  },
];

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <StepsLeftUsage /> */}
      <Carousel items={data}></Carousel>
    </View>
  );
};

export default App;
