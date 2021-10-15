import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Home({ navigation: { navigate } }) {
  return (
    <View style={styles.containerBig}>
      <View style={styles.container}>
        <Button
          title="Contacts"
          type="outline"
          icon={<Icon name="contacts" size={26} color="powderblue" />}
          onPress={() => navigate("Contacts")}
        />
        <Button
          title="Map"
          type="outline"
          icon={<Icon name="map" size={26} color="powderblue" />}
          onPress={() => navigate("Map")}
        />
      </View>

      <View style={styles.container}>
        <Button
          title="Gallery"
          type="outline"
          icon={<Icon name="photo" size={26} color="powderblue" />}
          onPress={() => navigate("Gallery")}
        />
        <Button
          title="Camera"
          type="outline"
          icon={<Icon name="contacts" size={26} color="powderblue" />}
          onPress={() => navigate("Camera")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBig: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  margin: {
    margin: 10,
  },
});

export default Home;
