import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from "react"
import { NavBar } from './src/components/navBar/navBar';
import Banner from './src/components/banner/banner';
import Movies from './src/components/movies/movies';

export default function App() {

  const [active, setActive] = useState("All");

  return (
    <ScrollView>
    <View>
       <View  style= {styles.container}>
         <Text style ={styles.header}>Now Showing</Text>
         <Text style= {styles.title}>View All</Text>
       </View>
      <NavBar active = {active} setActive = {setActive} />
      <Banner />
       <Text style= {styles.text}>Upcoming  Movies</Text>
       <Movies />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    padding: 7,
   
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
  },

  title: {
    color: "blue"
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginHorizontal: 15,
  }

});
