import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const WorkOut = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.back} >
          <Ionicons name='arrow-back-circle' size={30}/>
        </TouchableOpacity>
        <Text style={{fontSize:18,fontWeight:"bold"}}>WorkOut Plan</Text>
        <View style={styles.account}></View>
      </View>
      <Text style={{ margin: 15 }}>14 Days Burn</Text>
     
 
    </View>
  )
}

export default WorkOut

const styles = StyleSheet.create({
  container: {
    flex: 1,
paddingVertical:15
  },
  navbar: {
   
     padding:20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
    flexDirection:"row",
  },
  back: {
    width: 50,
    height: 50,
    backgroundColor: "#FFC107",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  account: {
    width: 50,
    height: 50,
    backgroundColor: "#FFC107",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
})