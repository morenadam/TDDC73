import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const Circle = (props) => {
  return (
    <View
      style={{
        ...styles.circle,
        borderColor: props.colorTheme,
        backgroundColor:
          props.index <= props.stepIndex ? props.colorTheme : '#fff',
      }}>
      <Text
        style={
          props.index <= props.stepIndex
            ? styles['selectedcircleTitle']
            : styles['circleTitle']
        }>
        {props.index + 1}
      </Text>
    </View>
  );
};

const StepHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      {props.steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Circle {...props} index={index} />
          <Text
            style={styles.titleCircle}
            numberOfLines={2}
            ellipsizeMode="tail">
            {step.title}
          </Text>
        </View>
      ))}
      <View style={{...styles.line, borderBottomColor: props.colorTheme}} />
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

const StepFooter = (props) => {
  const prev = () => {
    props.setStepIndex(props.stepIndex - 1);
  };
  const next = () => {
    props.setStepIndex(props.stepIndex + 1);
  };
  return (
    <View style={styles.footerContainer}>
      <Button
        title="Previous"
        color={props.colorTheme}
        onPress={prev}
        disabled={props.stepIndex === 0}
      />
      {props.stepIndex === props.steps.length - 1 ? (
        <Button
          title="Submit"
          color={props.colorTheme}
          onPress={() => props.onSubmit()}
        />
      ) : (
        <Button title="Next" color={props.colorTheme} onPress={next} />
      )}
    </View>
  );
};

const StepsLeft = (props) => {
  let initialState = props.startingStep ? props.startingStep : 0;
  let colorTheme = props.colorTheme ? props.colorTheme : 'teal';
  const [stepIndex, setStepIndex] = useState(initialState);
  return (
    <View style={styles.stepsLeftContainer}>
      <View>
        <StepHeader {...props} stepIndex={stepIndex} colorTheme={colorTheme} />
      </View>
      <View>
        <StepContent steps={props.steps} stepIndex={stepIndex} />
      </View>
      <View>
        <StepFooter
          {...props}
          stepIndex={stepIndex}
          setStepIndex={setStepIndex}
          colorTheme={colorTheme}
        />
      </View>
    </View>
  );
};

export default StepsLeft;
