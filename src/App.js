import React, {Component} from 'react';
import './App.css';
import {subTopics, topic} from './seedData';
import HeaderMobile from './components/headers/headerMobile/HeaderMobile';
import FooterMobile from './components/footerMobile/FooterMobile';

class App extends Component {

    maxWidthMobile = 600;

    constructor(props) {
        super(props);
        this.state = {
            display: window.innerWidth < this.maxWidthMobile ? 'mobile' : 'desktop',
            mobileNav: {
                firstIndex: '',
                lastIndex: '',
                navItemDetails: {
                    circleSpacing: 10,
                    circleRadius: 15
                }
            },
            subTopics,
            topic
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setDisplay();
            this.setMobileNavIndexRange();
        });
    }

    setDisplay() {
        if (window.innerWidth < this.maxWidthMobile && this.state.display !== 'mobile') {
            this.setState({display: 'mobile'});
        } else if (window.innerWidth >= this.maxWidthMobile && this.state.display !== 'desktop') {
            this.setState({display: 'desktop'});
        }
    }

    setMobileNavIndexRange() {
        this.setState({
            mobileNav: {
                ...this.state.mobileNav,
                firstIndex: 0,
                lastIndex: this.getMaxSubTopicDisplay(document.getElementById('header-mobile-nav-svg-container').offsetWidth)
            }
        });
    }

    updateMobileNavIndexRange(direction) {
        let firstIndex, lastIndex;
        if (direction === 'right') {
            firstIndex = this.state.mobileNav.firstIndex + 1;
            lastIndex = this.state.mobileNav.lastIndex + 1;
        } else if (direction === 'left') {
            firstIndex = this.state.mobileNav.firstIndex - 1;
            lastIndex = this.state.mobileNav.lastIndex - 1;
        }
        this.setState({
            mobileNav: {
                ...this.state.mobileNav,
                firstIndex,
                lastIndex
            }
        });
    }

    getMaxSubTopicDisplay(svgNavWidth) {
        const {mobileNav, subTopics} = this.state;
        const maxItems = Math.floor(svgNavWidth / (2 * (mobileNav.navItemDetails.circleSpacing + mobileNav.navItemDetails.circleRadius)));
        if (maxItems > subTopics.count) {
            return subTopics.length;
        } else {
            return maxItems;
        }
    }

    setActiveSubTopic(index) {
        this.setState({
            subTopics: this.state.subTopics.map(subTopic => {return {...subTopic, active: subTopic.index === index}})
        })
    }

    render() {
        const {display, subTopics, topic, mobileNav} = this.state;
        return (
            <div className={display === 'mobile' ? 'App-mobile' : 'App-desktop'}>
                {display === 'mobile' ?
                    <HeaderMobile
                        topic={topic}
                        subTopics={subTopics}
                        mobileNav={mobileNav}
                        updateMobileNavIndexRange={(direction) => this.updateMobileNavIndexRange(direction)}
                        setMobileNavIndexRange={() => this.setMobileNavIndexRange()}
                        setActiveSubTopic={(index) => this.setActiveSubTopic(index)}
                    />
                    : null}

                {display === 'mobile' ? <FooterMobile/> : null}
            </div>
        );
    }
}

export default App;
