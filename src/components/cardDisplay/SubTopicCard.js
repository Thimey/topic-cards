import React, {PropTypes} from 'react';
import CardTick from './CardTick';
import './subTopicCard.css';
import background from '../../assets/topicCardBackground.png';

const SubTopicCard = ({subTopic, setCompleteSubTopic}) => {
    console.log('set complet', setCompleteSubTopic);
    return (
        <div className="subTopic-card" style={{backgroundImage: 'url(' + background + ')', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>

            <div className="subTopic-card-title">
                <h3>{`${subTopic.index}. ${subTopic.title}`}</h3>
            </div>

            <div className="subTopic-card-tick">
                <CardTick stroke="#FFF" fill={subTopic.completed ? "#50D2C2" : "none"}/>
            </div>

            <div className="subTopic-card-button" onClick={() => setCompleteSubTopic(subTopic.index)}>
                { subTopic.completed ? "Completed!" : "Let's Go!" }
            </div>



        </div>
    )
};

SubTopicCard.propTypes = {
    subTopic: PropTypes.object.isRequired,
    setCompleteSubTopic: PropTypes.func
};

export default SubTopicCard;
