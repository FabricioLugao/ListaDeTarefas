import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function TarefaInput(props) {
    const [tarefaDigitada, setTarefaDigitada] = useState("");

    function textoTarefaManipulador(textoDigitado) {
        setTarefaDigitada(textoDigitado);
    }

    function adicionarTarefa() {
        props.onAdicionarTarefa(tarefaDigitada);
        setTarefaDigitada('')
    }

    return (<View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Digite sua tarefa"
            onChangeText={textoTarefaManipulador}
            value={tarefaDigitada}
        />
        <Button title="Adicionar" onPress={adicionarTarefa} />
    </View>)
}

export default TarefaInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#CCC",
        flex: 1,
    },
    input: {
        borderWidth: 2,
        borderColor: "#CCC",
        padding: 8,
        width: "70%",
    },

})