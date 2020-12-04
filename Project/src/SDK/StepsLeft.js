import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Dimensions} from 'react-native';
import styles from './styles';
//make as prop later
const myColor = 'teal';

const Circle = ({index, selectedIndex}) => {
  return (
    <View
      style={
        index <= selectedIndex
          ? {...styles['circle'], backgroundColor: myColor}
          : {...styles['circle'], backgroundColor: '#fff'}
      }>
      <Text
        style={
          index <= selectedIndex
            ? styles['selectedcircleTitle']
            : styles['circleTitle']
        }>
        {index + 1}
      </Text>
    </View>
  );
};

const StepHeader = ({steps, stepIndex}) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Circle selectedIndex={stepIndex} index={index} />
          <Text
            style={styles.titleCircle}
            numberOfLines={2}
            ellipsizeMode="tail">
            {step.title}
          </Text>
        </View>
      ))}
      <View style={styles.line} />
    </View>
  );
};

const StepContent = ({steps, stepIndex}) => {
  return (
    <View>
      <View>{steps[stepIndex].component}</View>
    </View>
  );
};

const StepFooter = ({steps, stepIndex, setStepIndex, onSubmit}) => {
  const prev = () => {
    setStepIndex(stepIndex - 1);
  };
  const next = () => {
    setStepIndex(stepIndex + 1);
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Button
        title="Previous"
        color={myColor}
        onPress={prev}
        disabled={stepIndex === 0}></Button>
      {stepIndex !== steps.length - 1 ? (
        <Button title="Next" color={myColor} onPress={next}></Button>
      ) : (
        <Button
          title="Submit"
          color={myColor}
          onPress={() => onSubmit()}></Button>
      )}
    </View>
  );
};

const StepsLeft = ({steps, startingStep, onSubmit}) => {
  let initialState = startingStep ? startingStep : 0;
  const [stepIndex, setStepIndex] = useState(initialState);
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View>
        <StepHeader steps={steps} stepIndex={stepIndex}></StepHeader>
      </View>
      <View>
        <StepContent steps={steps} stepIndex={stepIndex} />
      </View>
      <View>
        <StepFooter
          steps={steps}
          stepIndex={stepIndex}
          setStepIndex={setStepIndex}
          onSubmit={onSubmit}
        />
      </View>
    </View>
  );
};

export default StepsLeft;
