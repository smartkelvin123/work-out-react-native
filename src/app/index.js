import { StatusBar } from "expo-status-bar";
import exercises from "../../assets/data/exercises.json";
import { StyleSheet, View, FlatList } from "react-native";
import ExerciseListItem from "../component/ExerciseListItem";

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
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

export default App;
