import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { Text, View } from "../components/Themed";

const randomNumber = () => {
  return Math.floor(Math.random() * (9000000000 - 1000000000 + 1)) + 1000000000;
};

export default function PostsComponent() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {/* {[...Array(3000)].map((i) => {
        return <Text key={randomNumber()}>aaa</Text>;
      })} */}
      {data.map((item: any) => {
        return (
          <View key={item.id}>
            <Text style={{ textAlign: "left" }}>{item.id}</Text>
            <Text style={{ textAlign: "left" }}>{item.body}</Text>
            <Text style={{ textAlign: "left" }}>{randomNumber()}</Text>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
});
