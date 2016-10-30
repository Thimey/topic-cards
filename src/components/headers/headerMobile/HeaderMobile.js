import React, {PropTypes} from 'react';
import avatar from '../../../assets/avatar@2x.png';
import menuStack from '../../../assets/menu.svg';
import HeaderMobileNav from './HeaderMobileNav';
import './headerMobile.css';

const HeaderMobile = ({topic, subTopics, mobileNav, updateMobileNavIndexRange, setMobileNavIndexRange, setActiveSubTopic}) => {

    return (
        <div className="header-mobile">
            <div className="header-mobile-top">
                <div className="header-mobile-top-child"><img src={menuStack} alt="avatar"/></div>
                <div className="header-mobile-top-child">{topic.title}</div>
                <div className="header-mobile-top-child"><img className="header-mobile-avatar" src={avatar} alt="avatar"/></div>
            </div>

            <div className="header-mobile-nav-container">
                <HeaderMobileNav
                    subTopics={subTopics}
                    mobileNav={mobileNav}
                    updateMobileNavIndexRange={updateMobileNavIndexRange}
                    setMobileNavIndexRange={setMobileNavIndexRange}
                    setActiveSubTopic={setActiveSubTopic}
                />
            </div>
        </div>
    );

};

HeaderMobile.propTypes = {
    topic: PropTypes.object.isRequired,
    subTopics: PropTypes.array.isRequired,
    mobileNav: PropTypes.object.isRequired
};

export default HeaderMobile;
