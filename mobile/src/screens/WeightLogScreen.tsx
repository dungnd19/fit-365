import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeightLogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weight Log</Text>
      {/* TODO: Add weight log form and history */}
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
