import React from 'react';
import {Text, View, Button} from 'react-native';
import {StepsLeft} from './src/SDK';

const App = () => {
  //Testing
  //TODO: Fix componenets instead of JSX elements
  const step1Content = (
    <View style={{alignItems: 'center', padding: 20}}>
      <Text>Step1 content</Text>
    </View>
  );
  const step2Content = (
    <View style={{alignItems: 'center', padding: 20}}>
      <Text>Step2 content</Text>
    </View>
  );
  const step3Content = (
    <View style={{alignItems: 'center', padding: 20}}>
      <Text>Step3 content</Text>
    </View>
  );

  const steps = [
    {title: 'Payment', component: step1Content},
    {title: 'Shipping', component: step2Content},
    {title: 'Confirm', component: step3Content},
  ];

  return (
    <View style={{padding: 30}}>
      <StepsLeft steps={steps} />
    </View>
  );
};

export default App;
