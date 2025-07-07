import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Dashboard'>;
}

export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Measurements" onPress={() => navigation.navigate('Measurements')} />
      <Button title="Weight Log" onPress={() => navigation.navigate('WeightLog')} />
      <Button title="Nutrition" onPress={() => navigation.navigate('Nutrition')} />
      <Button title="Activity" onPress={() => navigation.navigate('Activity')} />
      <Button title="Photos" onPress={() => navigation.navigate('Photos')} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
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
