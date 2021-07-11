import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  haze: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "blue"],
    title: "haze",
    subtitle: "do not out!",
  },
  mist: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
    title: "mist",
    subtitle: "do not out!",
  },
};

export default function Weather({ temp, condition }) {
  condition = "haze";
  return (
    <LinearGradient colors={[weatherOptions[condition].gradient[0], weatherOptions[condition].gradient[1]]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={86} name={weatherOptions[condition].iconName} color="white" />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
