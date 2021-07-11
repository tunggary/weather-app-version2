import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./weather";
import * as Location from "expo-location";
import axios from "axios";
const API_key = "2d7fc7272002e196ae3643967a606270";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`);
    this.setState({
      isLoading: false,
      temp: data.main.temp,
      condition: data.weather[0].description,
    });
    console.log(this.state.condition);
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
      this.setState({
        isLoading: false,
      });
    } catch (error) {
      Alert.alert("can't find you");
      console.log(error);
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
