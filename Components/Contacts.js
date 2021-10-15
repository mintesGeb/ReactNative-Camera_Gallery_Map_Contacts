import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import * as Contacts from "expo-contacts";

function MyContacts() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        if (data.length > 0) {
          const contact = data[0];
          console.log("MyContact", contact);
        }
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text h4>I am Contacts</Text>
      <Button title="MyButton" type="outline" />
    </View>
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
});

export default MyContacts;
