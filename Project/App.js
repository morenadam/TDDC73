import React from 'react';
import {View} from 'react-native';
import StepsLeftUsage from './src/StepsLeftUsage';
import CarouselUsage from './src/CarouselUsage';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <CarouselUsage />
      {/* <StepsLeftUsage /> */}
    </View>
  );
};

export default App;
