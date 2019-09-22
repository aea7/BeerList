import { StyleSheet } from 'react-native';
import colors from "./Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.container_background,
    },
    item_container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.border

    },
    text_container: {
        justifyContent: 'space-around'

    },
    image_style: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10
    },
    name: {
        fontSize: 15
    },
    first_brewed: {
        fontSize: 11
    },
    filter_container: {
        padding: 10
    },
    filter_field: {
        fontSize: 16,
        backgroundColor: colors.filter_background,
        padding: 10
    }

});