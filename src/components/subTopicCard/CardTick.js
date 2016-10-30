import React, {PropTypes} from 'react';

const CardTick = ({stroke, fill}) => (
    <svg viewBox="-3 0 30 30" width='100%'>
        <g width='100%' id="group" transform="translate(0.000000, 0.500000)" stroke={stroke} strokeWidth="1.5">
            <path fill={fill}
                  d="M0.086875,12.9973932 C0.086875,19.9027503 5.68330357,25.4973932 12.586875,25.4973932 C19.4904464,25.4973932 25.086875,19.9027503 25.086875,12.9973932 C25.086875,6.09560746 19.4904464,0.497393177 12.586875,0.497393177 C5.68330357,0.497393177 0.086875,6.09560746 0.086875,12.9973932 Z"
                  id="oval"></path>
            <path fill={fill} d="M5.947675,12.9309667 L10.2041787,17.1139635 L18.646075,8.81565227" id="line"></path>
        </g>
    </svg>
);

CardTick.proptypes = {
    stroke: PropTypes.string,
    fill: PropTypes.string
};

export default CardTick;
