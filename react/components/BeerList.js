import React, {useState, useCallback} from 'react';
import {TouchableOpacity, View, SafeAreaView, Text, TextInput, Image, FlatList} from 'react-native';

import data from '../data/data'
import styles from '../styles/BeerList'
import colors from "../styles/Colors";

// name, image_url, first_brewed displayed

const renderBeerItem = ({item, index}) => {
    return (
        <TouchableOpacity style={[styles.item_container, {backgroundColor: index % 2 === 1 ? colors.light_gray : ''}]}>
            <Image
                style={styles.image_style}
                source={{uri: item.image_url}}
            />
            <View style={styles.text_container}>
                <Text style={styles.name}> {item.name}</Text>
                <Text style={styles.first_brewed}> {item.first_brewed}</Text>
            </View>
        </TouchableOpacity>
    )
};

const filterList = (input, setText, setList) => {
    setText(input);
    setList(data.filter(beer => {
        const beerItem = `${beer.name.toLowerCase()} ${beer.first_brewed}`;
        return beerItem.indexOf(input.toLowerCase()) > -1
    }))
};

const renderListHeader = (text, setText, setList) => {
    return (
        <View style={styles.filter_container}>
            <TextInput
                placeholder="Search for a beer..."
                placeholderTextColor={colors.dark_gray}
                style={styles.filter_field}
                value={text}
                onChangeText={input => {
                    console.log(input);
                    filterList(input, setText, setList);
                }
                }
            />
        </View>
    )
};

const BeerList = () => {

    const [text, setText] = useState("");
    const [list, setList] = useState(data);
    const beerItemCallback = useCallback(({ item, index }) => renderBeerItem({ item, index}));
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={renderListHeader(text, setText, setList)}
                renderItem={beerItemCallback}
                keyExtractor={(item, index) => index.toString()}
                data={list}
            >
            </FlatList>
        </SafeAreaView>
    );

};

export default BeerList