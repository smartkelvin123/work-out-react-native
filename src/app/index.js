import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import ExerciseListItem from "../component/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import { client } from "../graphClient";

const exercisesQuery = gql`
  query exercises($muscles: String, $name: String) {
    exercises(muscles: $muscles, name: $name) {
      muscle
      name
    }
  }
`;

const ExerciseScreen = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => {
      return client.request({ document: exercisesQuery });
    },
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
    return <Text>Failed to fetch exercises</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.exercises}
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    backgroundColor: "gainsboro",
    justifyContent: "center",
    padding: 10,
  },
});

export default ExerciseScreen;
