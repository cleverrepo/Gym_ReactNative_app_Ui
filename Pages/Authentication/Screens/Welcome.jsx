import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/premium-photo/young-fit-woman-sports-equipment-with-dumbbells-her-hands-sports-embossed-female-body-black-background-hard-light-copy-space-sports-banner_124865-40129.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
        }}
        blurRadius={7}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Welcome Back!{" "}
        </Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "normal" }}>
          Sign Up With your data Your entered during registration{" "}
        </Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.social}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/0/747.png",
              }}
              style={styles.image}
            />
            <Text  style={{fontSize:15}}>Sign Up With Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
              }}
              style={styles.image}
            />
            <Text  style={{fontSize:15}}>Sign Up With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emailSignIn} onPress={()=>navigation.navigate("Register")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
              }}
              style={styles.image}
            />
            <Text style={{fontSize:15}}>Sign Up With Email</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  socialButtons: {
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
  image: {
    width: 25,
    height: 25,
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
