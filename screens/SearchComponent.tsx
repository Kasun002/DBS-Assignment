import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Button, Searchbar, TextInput } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import PostsComponent from "./PostsComponent";

export default function SearchComponent() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          alignContent: "flex-start",
          height: 150,
          width: "100%",
          borderWidth: 1,
        }}
        source={require("../assets/images/doggo_walk.gif")}
        resizeMode="stretch"
      />
      <TextInput
        style={{
          width: "90%",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          margin: 10,
          borderRadius: 8
        }}
        onChangeText={(text) => onChangeSearch(text)}
        value={search}
        placeholder="Search a text"
      />

      <Button style={{
          width: "40%",
          backgroundColor: "gray",
          alignContent: "flex-start"
        }}>Re-render</Button>
        <PostsComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
