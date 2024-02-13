import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Apartment = ({ apartment , navigation, source}:any) => {
  return (
     <View style={styles.task}>
        <View style={styles.textWrapper}>
           <Text style={styles.text}>Apartment No.{apartment.number}</Text>
           <Text style={styles.text}>Floor: {apartment.floor}</Text>
           {source == "detail" && <>
                <Text style={styles.text}>Block: {apartment.block}</Text>
                <Text style={styles.text}>Street: {apartment.street}</Text>
                <Text style={styles.text}>District: {apartment.district}</Text>
                <Text style={styles.text}>City: {apartment.city}</Text>
           </>}
        </View>
        {!(source == "detail") && <>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: apartment._id })}>
            <Text style={styles.view}>View</Text>
            </TouchableOpacity>
        </>
        }
     </View>
  );
};

const styles = StyleSheet.create({
  task: {
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     backgroundColor: "#f8f8f8",
     padding: 15,
     borderRadius: 10,
     margin: 10,
  },
  textWrapper: {
     flex: 1,
  },
  text: {
     fontSize: 18,
  },
  view: {
     color: "blue",
  },
});

export default Apartment;