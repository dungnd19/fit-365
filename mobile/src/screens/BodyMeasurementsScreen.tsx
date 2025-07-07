import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BodyMeasurementsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Body Measurements</Text>
      {/* TODO: Add measurement inputs and list */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
