import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';

import styles from '../styles/BeerDetail'

const Beer = ({navigation}) => {
    let beerItem = navigation.getParam('beerItem');
    return (
        <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
            <View style={styles.container}>
            <Image
                style={styles.image_style}
                source={{uri: beerItem.image_url}}
            />
            <View style={styles.text_container}>
                <Text style={styles.field}> Name: {beerItem.name}</Text>
                <Text style={styles.field}> Description: {beerItem.description}</Text>
                <Text style={styles.field}> Alcohol: {beerItem.abv}%</Text>
                <Text style={styles.field}> Food Pairings: {beerItem.food_pairing}</Text>
            </View>
            </View>
        </ScrollView>
    );

};

export default Beer