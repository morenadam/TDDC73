import React from 'react';
import {Text, View, Alert} from 'react-native';

//import the react-native-steps-left
import {StepsLeft} from './SDK';

// setup the step content components
const Step1Content = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Step1 content</Text>
    </View>
  );
};
const Step2Content = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Step2 content</Text>
    </View>
  );
};
const Step3Content = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Step3 content</Text>
    </View>
  );
};

// setup steps
const steps = [
  {title: 'Payment', component: <Step1Content />},
  {title: 'Shipping', component: <Step2Content />},
  {title: 'Confirm', component: <Step3Content />},
];

// setup callback function for submit
const onFormSubmit = () => {
  Alert.alert(
    'Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
};

// render
const StepsLeftUsage = () => {
  // Required props:
  // steps - the steps
  // onSubmit - funciton to be executed on the last step

  // Optional props:
  // startingStep - Change starting index
  // colorTheme - Change the color theme e.g "navy"
  return (
    <View style={{padding: 30}}>
      <StepsLeft steps={steps} onSubmit={onFormSubmit} />
    </View>
  );
};

export default StepsLeftUsage;
