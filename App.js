import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './weather';

const API_KEY = "c696782801cb527b4c4d1b6d11f0b731";

export default class App extends Component {

  state = {
    isLoaded: false,
    err: null,
    temperature:null,
    name:null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
       this._getWeather(position.coords.latitude, position.coords.longitude)
    },
      err => {
        this.setState({
          err:err
        });
      })
  }

  _getWeather = (lat, long) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded:true
      })
    })
    .catch(err => console.log(err))
  }

  render() {

    const {isLoaded, err, temperature, name} = this.state;

    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
        {isLoaded ? <Weather weatherName={name} temp={Math.ceil(temperature-273.15)} /> :
          <View style={styles.loading}>
            <Text style={styles.loadingText}>getting weather data!</Text>
            {err ? <Text style={styles.errText}>{err}</Text> : null}
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading:{
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loadingText:{
    fontSize: 40,
    marginBottom: 100
  },
  errText:{
    color:"red",
    marginBottom: 20
  }
});
