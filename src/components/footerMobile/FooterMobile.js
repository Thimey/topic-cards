import React from 'react';
import graph from '../../assets/linegraph.svg';
import pie from '../../assets/piechart.svg';
import tick from '../../assets/tick.svg';
import './footerMobile.css';

const FooterMobile = () => {

    return (
        <div className="footer-mobile">
            <div><img src={tick} alt="tick"/></div>
            <div><img src={graph} alt="graph"/></div>
            <div><img src={pie} alt="pie"/></div>
        </div>
    );

};

export default FooterMobile;
