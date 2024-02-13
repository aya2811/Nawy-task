import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Apartment from './Apartment';

const MainScreen = ({ navigation  } : any) => {

    useEffect(() => {
        fetchData();
    },[]);

  const [apartments, setApartments] = useState([]);

  const fetchData = async () => {
    axios.get('http://localhost:8000/apartment/all')
    .then((response) => {
        setApartments(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
  };

  return ( 
     
    <View style={styles.container}> 
         <ScrollView style={styles.apartments}>
           {apartments.map((a, index) => (
              <Apartment
                 key={index}
                 apartment={a}
                 navigation = {navigation}
              />
           ))}
           
        </ScrollView>
    </View>  
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
     },
    header: {
       marginTop: 10,
       alignItems: "center",
    },
    headerText: {
       fontSize: 36,
       fontWeight: "bold",
    },
    apartments: {
       marginTop: 30,
       flex:1,
    },
  });

export default MainScreen;