import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Menu from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Locate from 'react-native-vector-icons/SimpleLineIcons';
import Time from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Page1} />
        <Tab.Screen name="Items" component={Page2} />
        <Tab.Screen name="Details" component={Page3} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const Page1 = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgreen' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./src/assets/food.jpg')} style={{ height: 300, width: 300 }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Food Ordering App</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Items")}>
          <View style={styles.button}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Get Your Meal</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const Page2 = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, marginBottom: 10, flexDirection: 'column', rowGap: 10 }}>
        <Menu name='menu' size={35} />
        <Text style={styles.text}>Choose Your Delicious Meal</Text>
        <View style={{ flexDirection: 'row', columnGap: 50, marginLeft: 50 }}>
          <Icon name='home' size={35} />
          <Icon name='hearto' size={35} />
          <Icon name='filter' size={35} />
          <Icon name='shoppingcart' size={35} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.view1}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Details")}>
            <View style={styles.view2}>
              <Image source={require('./src/assets/panner.jpeg')} style={{ height: 275, width: 150 }} />
              <Text style={styles.text}>Panner Curry</Text>
              <View style={{ flexDirection: 'row', columnGap: 60 }}>
                <Text style={styles.text}>$ 200</Text>
                <Icon name="plussquareo" size={20} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Image source={require('./src/assets/roti.jpeg')} style={{ height: 275, width: 150 }} />
              <Text style={styles.text}>Roti</Text>
              <View style={{ flexDirection: 'row', columnGap: 60 }}>
                <Text style={styles.text}>$ 90</Text>
                <Icon name="plussquareo" size={20} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.view1}>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Image source={require('./src/assets/sweet.jpeg')} style={{ height: 275, width: 150 }} />
              <Text style={styles.text}>Sweets</Text>
              <View style={{ flexDirection: 'row', columnGap: 60 }}>
                <Text style={styles.text}>$ 150</Text>
                <Icon name="plussquareo" size={20} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.view2}>
              <Image source={require('./src/assets/meals.jpeg')} style={{ height: 275, width: 150 }} />
              <Text style={styles.text}>Meals</Text>
              <View style={{ flexDirection: 'row', columnGap: 60 }}>
                <Text style={styles.text}>$ 120</Text>
                <Icon name="plussquareo" size={20} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>CART ITEMS</Text>
        </View>
      </ScrollView>
    </View >
  )
};
const Page3 = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view}>
        <Image source={require('./src/assets/panner.jpeg')} style={{ height: 400, width: 400 }} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.3, flexDirection: 'row', marginLeft: 20, columnGap: 50, marginTop: 15, justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 40, color: 'black', fontWeight: 'bold' }}>Panner Curry</Text>
            <Text style={{ color: 'lightgreen', fontSize: 30 }}>$120</Text>
          </View>
          <View style={{ flexDirection: 'row', columnGap: 40, marginTop: 15 }}>
            <Icon2 name='plussquare' size={30} color={'lightgreen'} />
            <Icon2 name='minussquareo' size={30} />
          </View>
        </View>
        <View style={{ justifyContent: 'flex-start', marginLeft: 20, flex: 1, rowGap: 20 }}>
          <Text style={{ fontSize: 25, color: 'black', fontWeight: 700 }}>Recipe</Text>
          <Text style={{ fontSize: 15 }}>Paneer Curry is an excellent vegetarian option for an easy Indian weeknight dinner. Serve it with roti, naan, paratha, rice, or even in wraps and dosa.</Text>
          <View style={{ flexDirection: 'row', columnGap: 20, height: 50, width: 350, borderColor: 'grey', borderWidth: 1 }}>
            <Locate name='location-pin' size={35} />
            <View>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Location</Text>
              <Text style={{ fontSize: 15, color: 'black' }}>Current Location</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', columnGap: 20, height: 50, width: 350, borderColor: 'grey', borderWidth: 1 }}>
            <Time name='time' size={35} />
            <View>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Delivery Time</Text>
              <Text style={{ fontSize: 15, color: 'black' }}>1 Hour</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.1, height: 20, width: 300, borderColor: 'black', borderWidth: 1, justifyContent: 'flex-start', alignItems: 'center', marginLeft: 50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'lightgreen', marginBottom: 10 }}>
          <Text style={{ color: 'black', fontSize: 20 }}>Cart Items</Text>
        </View>
      </View>
    </View>
  )
};
const styles = StyleSheet.create(
  {
    text: {
      color: 'lightgreen',
      fontSize: 19,
      fontWeight: 'bold'
    },
    view1: {
      flex: 1,
      flexDirection: 'row',
      margin: 40,
      columnGap: 30
    },
    view2: {
      flexDirection: 'column',
      rowGap: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    view3: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderBottomEndRadius: 15,
      borderBottomLeftRadius: 15,
      height: 35,
      width: 300,
      borderWidth: 1,
      backgroundColor: 'lightgreen',
      marginLeft: 65
    },
    button: {
      borderWidth: 2,
      borderColor: 'black',
      borderCurve: 'circular',
      padding: 10,
      borderRadius: 20,
      marginTop: 50,
      marginBottom: 50,
      height: 40,
      width: 275,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5
    }
  }
);
export default App;