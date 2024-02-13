import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MainScreen from './components/MainScreen';
import DetailScreen from './components/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
           <Text style={styles.headerText}>Apartments List</Text>
      </View>

      <NavigationContainer>  
        <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>  
          <Stack.Screen name="Main" component={MainScreen} />  
          <Stack.Screen name="Detail" component={DetailScreen} />  
        </Stack.Navigator>  
      </NavigationContainer>  
    </View>

    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
 },
 header: {
    marginBottom: 20,
    alignItems: "center",
 },
 headerText: {
    fontSize: 36,
    fontWeight: "bold",
 },
 apartments: {
    marginTop: 30,
 },
});
