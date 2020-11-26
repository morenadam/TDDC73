import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import styles from '../styles';

const Loading = () => {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
