import { Pressable, StyleSheet, Text, View } from "react-native";


function TarefaItem(props) {
    function deletarTarefa() {
        props.onDeleteTarefa(props.texto)
    }
    return (
        <View style={styles.itemTarefa}>
            <Pressable onPress={deletarTarefa} android_ripple={{ color: '#1a0442' }}>
                <Text style={styles.itemTarefaTexto} key={props.texto} onPre>
                    {props.texto}
                </Text>
            </Pressable>
        </View>)
}

export default TarefaItem;

const styles = StyleSheet.create({
    itemTarefa: {
        backgroundColor: "#5e0acc",
        marginBottom: 12,
        borderRadius: 6,
    },
    itemTarefaTexto: {
        padding: 8,
        color: "#FFF",
    }
})