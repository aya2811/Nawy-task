import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Apartment from './Apartment';


const DetailScreen = ({navigation, route}:any) => {

  useEffect(() => {
    fetchData();
  },[]);

  const [apartment, setApartment] = useState([]);
  
  
  const fetchData = async () => {
    axios.get(`http://localhost:8000/apartment/${route.params.id}`)
    .then((response) => {
        setApartment(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
  };


  return (  
    <View style={styles.task}>
        <View style={styles.textWrapper}>
          <Apartment
                 apartment={apartment}
                 navigation = {navigation}
                 source = {"detail"}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
           <Text style={styles.view}>Go home</Text>
        </TouchableOpacity>
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

export default DetailScreen;