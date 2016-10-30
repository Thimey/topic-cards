import React, {PropTypes} from 'react';
import SubTopicCard from '../subTopicCard/SubTopicCard';
import './cardDisplayMobile.css';

const CardDisplayMobile = ({subTopics, display, setCompleteSubTopic, activateClicked, completedClicked, resetActionStates}) => (
    <div className="card-display-mobile">
        <SubTopicCard
            subTopic={subTopics.filter(subTopic => subTopic.active)[0]}
            setCompleteSubTopic={setCompleteSubTopic}
            display={display}
            activateClicked={activateClicked}
            completedClicked={completedClicked}
            resetActionStates={resetActionStates}
        />
    </div>
);

CardDisplayMobile.propTypes = {
    subTopics: PropTypes.array.isRequired,
    display: PropTypes.string.isRequired,
    setCompleteSubTopic: PropTypes.func
};

export default CardDisplayMobile;
