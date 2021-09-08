import { StyleSheet } from "react-native-web";

const filmStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#a3928f ',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    dataContainer: {
        minWidth: 200,
        maxWidth: 200,
        padding: 5,
    }
});

export default filmStyles;