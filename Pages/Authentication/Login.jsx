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
  import {useNavigation} from "@react-navigation/native";
const Login = () => {
      const navigation = useNavigation();
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <ImageBackground
            source={{
              uri: "https://img.freepik.com/premium-photo/young-fit-woman-sports-equipment-with-dumbbells-her-hands-sports-embossed-female-body-black-background-hard-light-copy-space-sports-banner_124865-40129.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
            }}
            blurRadius={7}
            resizeMode="cover"
            style={styles.background}
          >
            <TouchableOpacity style={styles.backArrow}>
              <Ionicons name="arrow-back-circle" size={30} />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Sign In!
            </Text>
            <View style={styles.txtField}>
             
              <TextInput
                style={styles.input}
                placeholderTextColor={"white"}
                placeholder="Email"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor={"white"}
                placeholder="Password"
                        />
                        <TouchableOpacity style={styles.emailSignIn} onPress={()=>navigation.navigate("Intro")}>
           
            <Text style={{fontSize:15}}>Login</Text>
          </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    backArrow: {
      marginVertical: 40,
      marginHorizontal: 40,
      width: 50,
      height: 50,
      borderRadius: 80,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFC107",
    },
    txtField: {
      paddingTop: 100,
      alignItems: "center",
    },
    input: {
      width: 250,
      borderBottomWidth: 2,
      borderColor: "#9E9E9E",
      paddingHorizontal: 10,
      marginVertical: 10,
      fontSize: 16,
      },
      emailSignIn: {
        
        flexDirection: "row",
        width: 250,
        height: 50,
        borderRadius: 60,
        backgroundColor: "#FFC107",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10,
    
        elevation: 1,
  },
  });
  