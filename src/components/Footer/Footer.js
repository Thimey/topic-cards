import React from 'react';
import graph from '../../assets/linegraph.svg';
import pie from '../../assets/piechart.svg';
import tick from '../../assets/tick.svg';
import './Footer.css';

const Footer = ({display}) => (
    <div className={display === 'mobile' ? 'footer-mobile' : 'footer-desktop'}>
        <div><img src={tick} alt="tick"/></div>
        <div><img src={graph} alt="graph"/></div>
        <div><img src={pie} alt="pie"/></div>
    </div>
);

export default Footer;
