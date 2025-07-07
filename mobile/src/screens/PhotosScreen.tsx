import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PhotosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Photos</Text>
      {/* TODO: Integrate camera or gallery */}
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
