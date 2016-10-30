import React, {PropTypes} from 'react';
import SubTopicCard from './SubTopicCard';

const CardDisplay = ({subTopics, display, setCompleteSubTopic}) => (
    <div className="card-display">

        {display === 'mobile' ?
            <SubTopicCard
                subTopic={subTopics.filter(subTopic => subTopic.active)[0]}
                setCompleteSubTopic={setCompleteSubTopic}
            />
            : null}

        {display === 'desktop' ?
            subTopics.map(subTopic =>
                <SubTopicCard
                    key={subTopic.index}
                    subTopic={subTopic}
                    setCompleteSubTopic={setCompleteSubTopic}
                />)
            : null}
    </div>
);

CardDisplay.propTypes = {
    subTopics: PropTypes.array.isRequired,
    display: PropTypes.string.isRequired,
    setCompleteSubTopic: PropTypes.func
};

export default CardDisplay;
