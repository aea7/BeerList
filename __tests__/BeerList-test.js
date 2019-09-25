/**
 * @jest-environment jsdom
 */

import React from 'react';
import BeerList from '../react/components/BeerList';

import {render, fireEvent, getByTestId} from "@testing-library/react-native";

import renderer from 'react-test-renderer';

test("BeerList renders correctly", () => {
    const navigation = { navigate: jest.fn() };
    const { container } = render(<BeerList navigation={navigation}/>).asJSON;
    expect(container).toMatchSnapshot();
});