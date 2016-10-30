import React, {PropTypes} from 'react';
import avatar from '../../../assets/avatar@2x.png';
import './headerDesktop.css';

const HeaderDesktop = ({topic}) => (
    <div className="header-desktop">

        <div>
            ...some menu options
        </div>

        <div className="header-desktop-topic">
            {topic.title}
        </div>

        <div>
            <img src={avatar} alt="avatar"/>
        </div>
    </div>
);

HeaderDesktop.propTypes = {
    topic: PropTypes.object.isRequired
};

export default HeaderDesktop;
