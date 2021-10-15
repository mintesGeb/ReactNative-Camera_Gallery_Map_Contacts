import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Dimentions,
} from "react-native";
import { Button } from "react-native-elements";
import * as Location from "expo-location";
// import MapView from "react-native-maps";

function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission Denied");
        return;
      }
      let loc = await Location.getCurrentPositionAsync();
      console.log(loc);
      setLocation(loc);
    })();
  }, []);

  //   let text = "Waiting..";
  //   if (errorMsg) {
  //     text = errorMsg;
  //   } else if (location) {
  //     text = JSON.stringify(location);
  //   }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : location ? (
          <View>
            <Text>latitude: {location.coords.latitude}</Text>
            <Text>longitude: {location.coords.longitude}</Text>
          </View>
        ) : (
          <Text>Waiting..</Text>
        )}

        {/* <MapView style={styles.map} initialRegion={{
        latitude:39.0045296,
        latitudeDelta:0.0922 /10,
        longitude:-76.9066717,
        longitudeDelta:0.0421 /10,
      }}><Marker
      draggable
      coordinate={{accuracy: 2798.1393311232596,latitude: 39.0045296,
longitude: -76.9066717
}}    title="MyLoc"
description="test"
pinColor="red"
      /></ MapView> */}
      </ScrollView>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <MapView style={styles.map} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  //   container: {
  //     flex: 1,
  //     paddingTop: StatusBar.currentHeight,
  //   },
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 20,
  },
  //   map: {
  //     width: Dimentions.get("window").width,
  //     height: Dimentions.get("window").height,
  //   },
});

export default Map;
