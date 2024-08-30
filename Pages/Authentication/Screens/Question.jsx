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

const Question = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://img.freepik.com/premium-photo/young-fit-woman-sports-equipment-with-dumbbells-her-hands-sports-embossed-female-body-black-background-hard-light-copy-space-sports-banner_124865-40129.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
      }}
      blurRadius={7}
    >
      <TouchableOpacity style={styles.backArrow}>
        <Ionicons name="arrow-back-circle" size={30} />
      </TouchableOpacity>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.social}>
          <Text style={{ fontSize: 15 }}>Loos Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.social}>
          <Text style={{ fontSize: 15 }}>Build Muscles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.social}>
          <Text style={{ fontSize: 15, color: "#FFC107", fontWeight: "bold" }}>
            Get Fit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.emailSignIn}
          onPress={() => navigation.navigate("BottomBar")}
        >
          <Text style={{ fontSize: 15 }}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },

  socialButtons: {
    marginLeft: 50,
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 70,
  },
  social: {
    flexDirection: "row",
    width: 250,
    height: 50,
    borderRadius: 60,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,

    elevation: 1,
  },
  emailSignIn: {
    flexDirection: "row",
    width: 250,
    height: 50,
    borderRadius: 60,
    backgroundColor: "#FFC107",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,

    elevation: 1,
  },
});
