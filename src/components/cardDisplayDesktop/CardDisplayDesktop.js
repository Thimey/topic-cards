import React, {PropTypes} from 'react';
import SubTopicCard from '../subTopicCard/SubTopicCard';
import './cardDisplayDesktop.css';

const CardDisplayDesktop = ({subTopics, display, setCompleteSubTopic}) => (
    <div className="card-display-desktop">
        {subTopics.map(subTopic =>
            <SubTopicCard
                key={subTopic.index}
                subTopic={subTopic}
                setCompleteSubTopic={setCompleteSubTopic}
                display={display}
            />
        )}
    </div>
);

CardDisplayDesktop.propTypes = {
    subTopics: PropTypes.array.isRequired,
    display: PropTypes.string.isRequired,
    setCompleteSubTopic: PropTypes.func
};

export default CardDisplayDesktop;
