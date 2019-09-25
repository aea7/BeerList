import React from 'react';
import BeerDetail from '../react/components/BeerDetail';

import renderer from 'react-test-renderer';
import mockData from "../react/data/mockData";

const beerItem = mockData[0];

test('BeerDetail renders correctly', () => {
    const navigation = { navigate: jest.fn(), getParam: () => beerItem, params: {beerItem: beerItem} };
    navigation.navigate('BeerDetail', {beerItem: beerItem});
    const tree = renderer.create(BeerDetail({navigation})).toJSON();
    expect(tree).toMatchSnapshot();
});