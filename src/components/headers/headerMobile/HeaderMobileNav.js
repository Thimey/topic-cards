import React, {Component} from 'react';
import leftArrow from '../../../assets/left.svg';
import rightArrow from '../../../assets/right.svg';
import SubTopicNavItem from './SubTopicNavItem';
import './headerMobileNav.css';

export default class HeaderMobileNav extends Component {

    componentDidMount() {
        const {setMobileNavIndexRange} = this.props;
        setMobileNavIndexRange();
    }

    rightArrowClick() {
        const {subTopics, updateMobileNavIndexRange, mobileNav} = this.props;
        if (mobileNav.lastIndex < subTopics.length) {
            updateMobileNavIndexRange('right');
        }
    }

    leftArrowClick() {
        const {updateMobileNavIndexRange, mobileNav} = this.props;
        if (mobileNav.firstIndex > 0) {
            updateMobileNavIndexRange('left');
        }
    }

    render() {
        const {subTopics, mobileNav, setActiveSubTopic} = this.props;
        let lastIndex = subTopics.length;
        return (
            <div className="header-mobile-nav">
                {mobileNav.firstIndex > 0 ?
                    <div
                        className="header-mobile-nav-arrow-left"
                        onClick={() => this.leftArrowClick()}>
                        <img src={leftArrow} alt="prev"/>
                    </div> : null}

                <div id="header-mobile-nav-svg-container" className="header-mobile-nav-topics">
                    <svg id="header-mobile-nav-svg" height="60px" width='100%'>
                        <g>
                            {subTopics.slice(mobileNav.firstIndex, mobileNav.lastIndex).map((subTopic, index) =>
                                <SubTopicNavItem
                                    key={subTopic.index}
                                    subTopic={subTopic}
                                    index={index}
                                    circleRadius={mobileNav.navItemDetails ? mobileNav.navItemDetails.circleRadius : 0}
                                    circleSpacing={mobileNav.navItemDetails ? mobileNav.navItemDetails.circleSpacing : 0}
                                    containerHeight={60}
                                    fontSize={14}
                                    setActiveSubTopic={setActiveSubTopic}
                                    lastIndex={lastIndex}
                                />
                            )}
                        </g>
                    </svg>
                </div>
                {mobileNav.lastIndex < subTopics.length ?
                    <div
                        className="header-mobile-nav-arrow-right"
                        onClick={() => this.rightArrowClick()}>
                        <img src={rightArrow} alt="next"/>
                    </div> : null}
            </div>
        );
    }
}
