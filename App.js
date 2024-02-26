import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TarefaItem from "./components/TarefaItem";
import TarefaInput from "./components/TarefaInput";

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefaManipulador(tarefaDigitada) {
    setTarefas((tarefasAtuais) => [...tarefasAtuais, tarefaDigitada]);
  }

  function deletarTarefa(tarefaDeletada) {
    setTarefas((tarefasAtuais) => {
      return tarefasAtuais.filter((tarefa) => tarefa != tarefaDeletada);
    });
  }

  return (
    <View style={styles.container}>
      <TarefaInput onAdicionarTarefa={adicionarTarefaManipulador} />
      <View style={styles.tarefasContainer}>
        <FlatList
          data={tarefas}
          renderItem={(itemData) => {
            return (
              <TarefaItem
                texto={itemData.item}
                onDeleteTarefa={deletarTarefa}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tarefasContainer: {
    flex: 7,
  },
});
