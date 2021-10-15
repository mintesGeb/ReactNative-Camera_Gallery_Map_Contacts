import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Dimentions } from "react-native";
import { Button, Text } from "react-native-elements";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";

function MyCamera() {
  const [hasPermission, setHasPermission] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [picture, setPicture] = useState(null);
  let camera = null;

  useEffect(() => {
    console.log("side effect");
    (async () => {
      const { status } = Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  // if (hasPermission === false) {
  //   return <Text>No access to Camera</Text>;
  // }

  const captured = async () => {
    const photo = await camera.takePictureAsync();
    setPicture(photo.uri);

    const timestamp = Date.now();
    const to = `${FileSystem.documentDirectory}photos/Photo_${timestamp}.jpg`;

    await FileSystem.copyAsync({
      from: photo.uri,
      to: to,
    });
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          camera = ref;
        }}
      >
        <Button
          title="Flip"
          type="outline"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.Back
            );
          }}
        />
        <Button title="Capture" type="outline" onPress={captured} />
        {picture ? <Image source={{ uli: picture }} /> : null}
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  // map: {
  //   width: Dimentions.get("window").width,
  //   height: Dimentions.get("window").height,
  // },
});

export default MyCamera;
