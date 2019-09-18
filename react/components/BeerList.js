import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, Text, FlatList} from 'react-native';

import data from '../data/data'

export default class BeerList extends Component {

    renderBeerItem = ({item, index}) => {
        return(
            <View>
                <Text>
                    {item.name}
                </Text>
            </View>
        )
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    renderItem={this.renderBeerItem}
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                >
                </FlatList>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});