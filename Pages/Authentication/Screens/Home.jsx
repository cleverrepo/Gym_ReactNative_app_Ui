import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  const data = [
    "https://img.freepik.com/free-photo/muscular-young-man-lifting-weights-black-background_7502-4999.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/brutal-strong-bodybuilder-athletic-men-pumping-up-muscles-with-dumbbells_174475-390.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/blondy-athletic-female-doing-exercises-with-barbell-gym-room-with-green-fitness-balls_613910-14304.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/sporty-fitness-woman-with-dumbbells-isolated-black-background_231208-10321.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
  ];

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.appBar}>
        <Ionicons name="notifications" size={25} color="#FFC107" />
        <View style={styles.headerImage} />
      </View>

     
      <Text>Categories</Text>
      <View style={styles.header}>
        <TouchableOpacity style={styles.filter}>
          <Ionicons name="filter" size={25} color="#FFC107" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={()=>navigation.navigate("WorkOut")}>
          <Text>Gym Workout</Text>
          </TouchableOpacity>
        <View style={[styles.categoryButton, styles.home]} >
          <Text>Home Workout</Text>
          </View>
      </View>

   

   
      <View style={styles.advert}>
        <Text>Feature Plans</Text>
        <TouchableOpacity>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.contain}>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/premium-photo/athletic-man-doing-exercises-with-dumbbells-biceps-photo-strong-male-with-naked-torso-dark-wall-strength-motivation_136403-5648.jpg?ga=GA1.1.1152868513.1723270778&semt=ais_hybrid",
          }}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.below}>
            <View style={styles.centerContainer}>
              <Text style={[styles.textWhite, styles.featureTitle]}>
                Yoga Class
              </Text>
            </View>
            <View style={styles.txt}>
              <Text style={styles.textWhite}>Strengthen with band</Text>
              <TouchableOpacity style={styles.arrow}>
                <Ionicons name="arrow-forward" size={25} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.advert}>
        <Text>Trending Plans</Text>
        <TouchableOpacity>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
   

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={{ uri: item }}
              style={styles.cardImage} 
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()} 
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 20,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filter: {
    width: 50,
    height: 50,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  categoryButton: {
    width: 130,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    backgroundColor: "#FFC107",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
  home: {
    backgroundColor: "#ddd",
  },
  contain: {
    marginLeft: 18,
    width: "90%",
    height: 150,
    borderRadius: 40,
    backgroundColor: "#ddd",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  yogaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  arrow: {
    width: 50,
    height: 50,
    backgroundColor: "#FFC107",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  advert: {
    margin:15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  centerContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
  },
  txt: {
    backgroundColor: "rgba(20, 20, 20, 0.7)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    paddingLeft: 15,
    paddingRight: 45,
    marginBottom: 15,
  },
  textWhite: {
    color: "white",
  },
  featureTitle: {
    fontSize: 15,
    padding: 15,
    borderRadius: 60,
    backgroundColor: "rgba(20, 20, 20, 0.7)",
  },
 
  card: {
    margin:15,
    width: 150, 
    height: 200, 
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
