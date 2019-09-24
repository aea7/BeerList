import React, {useState, useCallback, useEffect} from 'react';
import {TouchableOpacity, View, SafeAreaView, Text, TextInput, Image, FlatList} from 'react-native';

import styles from '../styles/BeerList'
import colors from "../styles/Colors";

// name, image_url, first_brewed displayed
let page, data, searching, count;
data = {};
page = 1;
searching = false;
count = 0;

const getNextUrl = () => {
    return `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
};

const filterList = (input, setText, setList) => {
    searching = (input !== '');
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
                    filterList(input, setText, setList);
                }
                }
            />
        </View>
    )
};

const BeerList = ({navigation}) => {
    const [totalBeers, setTotalBeers] = useState(10);
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const beerItemCallback = useCallback(({item, index}) => renderBeerItem({item, index}));

    const renderBeerItem = ({item, index}) => {
        return (
            <TouchableOpacity
                style={[styles.item_container, {backgroundColor: index % 2 === 1 ? colors.light_gray : ''}]}
                onPress={() => navigation.navigate('BeerDetail', {
                    beerItem: item
                })}
            >
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

    async function getMoreBeers() {
        const url = getNextUrl();
        fetch(url)
            .then(res => res.json())
            .then(res => {
                    if (page === 1){
                        setList([...res]);
                        data = [...res];
                    }else {
                        setList([...list, ...res]);
                        data = [...list, ...res];
                    }
            })
            .catch((error) => console.log(error.toString()))
    }

    const loadMoreBeer = () => {
        if (searching) {
            //
        }else{
            page++;
            getMoreBeers();
        }
    };

    async function countTotalNumberOfBeers(page: number) {
        let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=80`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if (res.length === 0) {
                    setTotalBeers(count);
                    return;
                }
                let nextPage = page + 1;
                count += res.length;
                countTotalNumberOfBeers(nextPage)
            })
            .catch((error) => console.log(error.toString()))
    }

    useEffect(() => {
        getMoreBeers();
        if (page === 1){
            countTotalNumberOfBeers(page);
        }

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.total_field}> Total Beers: {totalBeers} </Text>
            <FlatList
                ListHeaderComponent={renderListHeader(text, setText, setList)}
                renderItem={beerItemCallback}
                keyExtractor={(item, index) => index.toString()}
                data={list}
                onEndReached={loadMoreBeer}
                onEndReachedThreshold={0}
            >
            </FlatList>
        </SafeAreaView>
    );

};

export default BeerList