import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/rn.png')} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button title="BUTTON"></Button>
          <Button title="BUTTON"></Button>
        </View>
        <View style={styles.row}>
          <Button title="BUTTON"></Button>
          <Button title="BUTTON"></Button>
        </View>
      </View>

      <View style={styles.emailContainer}>
        <View>
          <Text style={{marginVertical: 12}}>Email</Text>
        </View>
        <View>
          <TextInput
            style={styles.txtInput}
            placeholder="liuID@liu.se"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 80,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txtInput: {
    borderBottomWidth: 1,
    height: 40,
    width: 200,
  },
  emailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
