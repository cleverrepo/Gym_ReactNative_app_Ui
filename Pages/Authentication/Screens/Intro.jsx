import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/free-photo/sporty-woman-doing-aerobic-exercise_155003-278.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
        }}
        style={styles.backgroundImage}
        blurRadius={7}
      >
        <TouchableOpacity style={styles.backArrow}>
          <Ionicons name="arrow-back-circle" size={30} />
        </TouchableOpacity>
        <View style={styles.centerTxt}>
          <Text style={{ color: "#FFC107", fontSize: 25, fontWeight: "bold" }}>
            Hi, Mario
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "normal" }}>
            Welcome To Fitness
          </Text>
          <Text
            style={{
              textAlign: "center",
              padding: 15,
              color: "white",
              fontSize: 15,
              fontWeight: "normal",
            }}
          >
            Answer few question and we will better help you gain your objectives{" "}
          </Text>
          <TouchableOpacity
            style={styles.emailSignIn}
            onPress={() => navigation.navigate("Question")}
          >
            <Text style={{ fontSize: 15 }}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  backArrow: {
    marginVertical: 60,
    marginHorizontal: 20,
    width: 50,
    height: 50,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC107",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  centerTxt: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 170,
  },
  emailSignIn: {
    flexDirection: "row",
    width: 200,
    height: 50,
    borderRadius: 60,
    backgroundColor: "#FFC107",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,

    elevation: 1,
  },
});
