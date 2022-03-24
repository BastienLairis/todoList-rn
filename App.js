import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

//checkbox and icons
import Checkbox from "expo-checkbox";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useState } from "react";

// <Ionicons name="trash-bin-sharp" size={24} color="black" />;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My TodoList 🚀</Text>

      <View style={{ marginVertical: 18 }}>
        {/* On va venir "maper" sur le state todos ici ! */}
        {todos.map((todo, index) => {
          return (
            <View style={styles.line} key={index}>
              <Text>{todo}</Text>
            </View>
          );
        })}
      </View>

      <TextInput
        placeholder="Enter todo..."
        style={styles.line}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity
        title="Add task"
        style={styles.btnContainer}
        onPress={() => {
          const newTodos = [...todos];
          newTodos.push(input);
          setTodos(newTodos);
          setInput("");
        }}
      >
        <Text style={styles.btnText}>Add task 🤙</Text>
        <Entypo name="circle-with-plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fd",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  line: {
    flexDirection: "row",
    backgroundColor: "white",
    width: Dimensions.get("window").width * 0.8,
    padding: 15,
    borderRadius: 12,
    marginVertical: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  btnContainer: {
    width: 200,
    backgroundColor: "#5C48D3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    shadowColor: "#5C48D3",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginTop: 10,
  },
  btnText: { color: "white", padding: 15, fontWeight: "bold" },
});
