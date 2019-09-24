import { StyleSheet } from 'react-native';
import colors from "./Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.container_background,
        alignItems: 'center',
        marginTop: 25
    },
    text_container: {
        justifyContent: 'space-around',
        paddingTop: 25
    },
    image_style: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginHorizontal: 10
    },
    field: {
        fontSize: 19,
        fontWeight: 'bold',
        padding: 10,
        color: colors.darker_gray
    },
});