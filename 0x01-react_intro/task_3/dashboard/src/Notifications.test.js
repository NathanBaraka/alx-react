// src/Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'; // Adjust the import path if necessary

describe('Notifications Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    test('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('renders three list items', () => {
        expect(wrapper.find('li')).toHaveLength(3);
    });

    test('renders the text "Here is the list of notifications"', () => {
        expect(wrapper.contains('Here is the list of notifications')).toBe(true);
    });
});
