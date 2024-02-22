import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.container}>
      data={exercises}
      renderItem=
      {(item) => (
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{item.name}</Text>
          <Text style={styles.exerciseSubtitle}>
            {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
