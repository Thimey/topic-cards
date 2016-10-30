import React, {PropTypes} from 'react';

const SubTopicNavItem = ({subTopic, circleRadius, circleSpacing, containerHeight, fontSize, index, setActiveSubTopic}) => {

    const circleCenterX = (index + 1) * (2 * circleRadius + circleSpacing);
    const circleCenterY = containerHeight / 2;
    const completedColour = '#50D2C2';
    const nonCompletedColour = '#BA77FF';
    const completedStoke = '#50D2C2';
    const nonCompletedStoke = '#FFF';
    const textColour = '#FFF';

    return (
        <g key={`${subTopic.index}g`} onClick={() => setActiveSubTopic(subTopic.index)}>
            <g>
                <circle
                    key={`${subTopic.index}c`}
                    fill={subTopic.completed ? completedColour : nonCompletedColour}
                    stroke={subTopic.completed ? completedStoke : nonCompletedStoke}
                    cy={circleCenterY}
                    cx={circleCenterX}
                    r={circleRadius}
                >
                </circle>
                <line
                    x1={circleCenterX + circleRadius}
                    y1={circleCenterY}
                    x2={circleCenterX + circleSpacing + circleRadius}
                    y2={circleCenterY}
                    stroke={subTopic.completed ? completedStoke : nonCompletedStoke}
                    strokeWidth={2}
                />
                <text
                    textAnchor="middle"
                    fill={textColour}
                    x={circleCenterX}
                    y={circleCenterY + fontSize/2}
                    fontSize={fontSize}
                >{subTopic.index}</text>
            </g>

            {subTopic.active ?
                <circle
                    key={`${subTopic.index}a`}
                    stroke={completedColour}
                    strokeWidth="2"
                    fill="none"
                    cy={circleCenterY}
                    cx={circleCenterX}
                    r={circleRadius + circleSpacing/2}>
                </circle>
                : null}
        </g>
    );
};

SubTopicNavItem.propTypes = {
    subTopic: PropTypes.object.isRequired,
    circleRadius: PropTypes.number.isRequired,
    circleSpacing: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired
};

export default SubTopicNavItem;
