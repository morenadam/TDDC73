import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Dimensions} from 'react-native';

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
  //const stepsContext = useContext(StepsContext);
  //const {steps, currentStepIndex} = stepsContext;
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Circle selectedIndex={stepIndex} index={index} />
          <Text
            style={styles.titleCircle}
            numberOfLines={2}
            ellipsizeMode="clip">
            {step.title}
          </Text>
        </View>
      ))}
      <View style={styles.line} />
    </View>
  );
};

const StepContent = ({steps, stepIndex}) => {
  // const stepsContext = useContext(StepsContext);
  // const { steps, currentStepIndex } = stepsContext;

  return (
    <View>
      <View>{steps[stepIndex].component}</View>
    </View>
  );
};

const StepFooter = ({steps, stepIndex, setStepIndex}) => {
  const prev = () => {
    setStepIndex(stepIndex - 1);
  };
  const next = () => {
    setStepIndex(stepIndex + 1);
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Button title="Prev" color={myColor} onPress={prev}></Button>
      <Button title="Next" color={myColor} onPress={next}></Button>
    </View>
  );
};

const StepsLeft = ({steps}) => {
  const [stepIndex, setStepIndex] = useState(0);
  return (
    <View>
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
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 0,
  },
  contentContainer: {
    width: Dimensions.get('window').width,
    flex: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stepContainer: {
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleCircle: {
    marginTop: 10,
    maxWidth: 50,
    fontSize: 12,
    paddingBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: myColor,
    width: '85%',
    position: 'absolute',
    top: 35,
    marginHorizontal: 20,
    left: 0,
  },
  circle: {
    borderWidth: 1,
    borderColor: myColor,
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    zIndex: 1,
  },
  circleTitle: {
    fontSize: 12,
    color: 'black',
  },
  selectedcircleTitle: {
    fontSize: 12,
    color: '#fff',
  },
});

export default StepsLeft;
