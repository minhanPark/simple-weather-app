import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from "expo";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a Rain",
    subtitle: "For more info look outside",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny Sunny",
    subtitle: "Go get your body burnt",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, it's boring",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as cold",
    subtitle: "Do you want to build a snowman? no thanks.",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain,‍🌈",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Don't know what that is is",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
    icon: "weather-fog"
  }
};


function Weather({temp, weatherName}){
  return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
          <View style={styles.upper}>
            <MaterialCommunityIcons name={weatherCases[weatherName].icon} size={144} color="white" />
            <Text style={styles.temp}>{temp}°</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subTitle}>{weatherCases[weatherName].subtitle}</Text>
          </View>
        </LinearGradient>
  )
}

Weather.propTypes = {
  temp:PropTypes.number.isRequired,
  weatherName:PropTypes.string.isRequired
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lower:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft: 30
  },
  title:{
    fontSize:38,
    color: "white",
    marginBottom: 15,
    fontWeight: "300"
  },
  subTitle:{
    fontSize:24,
    color: "white",
    marginBottom: 25
  },
  temp:{
    fontSize:48,
    color: "white",
    marginTop: 10
  }
});
