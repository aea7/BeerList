import React, {useState, useCallback, useEffect} from 'react';
import {TouchableOpacity, View, SafeAreaView, Text, TextInput, Image, FlatList} from 'react-native';

import styles from '../styles/BeerList'
import colors from "../styles/Colors";

// name, image_url, first_brewed displayed
let page = 1;
let data = {};

const getNextUrl = (page: number) => {
    return `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
};

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

const filterList = (input, setText, list, setList) => {
    setText(input);
    setList(data.filter(beer => {
        const beerItem = `${beer.name.toLowerCase()} ${beer.first_brewed}`;
        return beerItem.indexOf(input.toLowerCase()) > -1
    }))
};

const renderListHeader = (text, setText, list, setList) => {
    return (
        <View style={styles.filter_container}>
            <TextInput
                placeholder="Search for a beer..."
                placeholderTextColor={colors.dark_gray}
                style={styles.filter_field}
                value={text}
                onChangeText={input => {
                    console.log(input);
                    filterList(input, setText, list, setList);
                }
                }
            />
        </View>
    )
};

const BeerList = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState({});
    const [url, setUrl] = useState(getNextUrl(page));
    const beerItemCallback = useCallback(({item, index}) => renderBeerItem({item, index}));

    async function getMoreBeers() {
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(res => {
                    setList(res);
                    data = res;
            })
            .catch((error) => console.log(error.toString()))
    }

    useEffect(() => {
        getMoreBeers();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={renderListHeader(text, setText, list, setList)}
                renderItem={beerItemCallback}
                keyExtractor={(item, index) => index.toString()}
                data={list}
            >
            </FlatList>
        </SafeAreaView>
    );

};

export default BeerList