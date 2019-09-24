import React from 'react';
import BeerList from './react/components/BeerList';
import BeerDetail from './react/components/BeerDetail';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Navigation = createStackNavigator({
    BeerList: {
        screen: BeerList
    },
    BeerDetail: {
        screen: BeerDetail
    }
},{
    initialRouteName: 'BeerList'
});

const Container = createAppContainer(Navigation);

export default Container
