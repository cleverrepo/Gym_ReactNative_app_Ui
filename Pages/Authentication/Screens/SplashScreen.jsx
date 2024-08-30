import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/free-photo/sporty-woman-doing-aerobic-exercise_155003-278.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
        }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.message}>
          <Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
            Energize{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
            Your Life{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Perfect for Food adn Training{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Your Body Balance{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            And Endurance{" "}
          </Text>
          <View style={styles.border}></View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.arrow} onPress={()=>navigation.navigate("Welcome")}>
            <Ionicons name="arrow-forward" size={25} />
          </TouchableOpacity>
              </View>
              
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  backgroundImage: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  message: {
    marginTop: 180,
  },
  border: {
    width: 70,
    height: 10,
    borderRadius: 60,
    backgroundColor: "#FFC107",
  },
  container: {
    width: 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(20, 20, 20, 0.7)',
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 80,
    marginLeft: 10,
  },
  arrow: {
    marginRight: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#FFC107",
    justifyContent: "center",
    alignItems: "center",
  },
});
