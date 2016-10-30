import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import {subTopics, topic} from './seedData';

import HeaderMobileNav from './components/headers/headerMobile/HeaderMobileNav';
import SubTopicNavItem from './components/headers/headerMobile/SubTopicNavItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

// Mobile Nav -->
const minProps = {
    subTopics,
    mobileNav: {
        firstIndex: 0,
        lastIndex: 5,
        navItemDetails: {
            circleSpacing: 10,
            circleRadius: 15
        }
    },
    updateMobileNavIndexRange: () => {
    },
    setMobileNavIndexRange: () => {
    },
    setActiveSubTopic: () => {
    }
};

describe('mobile nav component', () => {

    it('should render the correct amount of circles based on state index', () => {
        const wrapper = shallow(<HeaderMobileNav {...minProps} />);
        expect(wrapper.find(SubTopicNavItem).length).toEqual(5);
    });

    it('should have right arrow when last index is less than 9', () => {
        const wrapper = shallow(<HeaderMobileNav {...minProps} />);
        expect(wrapper.find('.header-mobile-nav-arrow-right').length).toEqual(1);
    })

    it('should have left arrow when first index is greater than 0', () => {
        const mobileNav = {
            firstIndex: 2,
            lastIndex: 9
        };
        const wrapper = shallow(<HeaderMobileNav {...minProps} mobileNav={mobileNav} />);
        expect(wrapper.find('.header-mobile-nav-arrow-left').length).toEqual(1);
    });

    it('should have both arrow when first index is greater than 0 and last less than 9', () => {
        const mobileNav = {
            firstIndex: 2,
            lastIndex: 5
        };
        const wrapper = shallow(<HeaderMobileNav {...minProps} mobileNav={mobileNav} />);
        expect(wrapper.find('.header-mobile-nav-arrow-left').length).toEqual(1);
    })
});
