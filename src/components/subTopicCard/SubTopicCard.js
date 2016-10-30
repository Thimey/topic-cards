import React, {Component, PropTypes} from 'react';
import CardTick from './CardTick';
import {TweenLite, TimelineLite, Bounce} from 'gsap';
import './subTopicCard.css';
import background from '../../assets/topicCardBackground.png';

class SubTopicCard extends Component {

    componentDidUpdate() {
        const {display, resetActionStates, activateClicked, completedClicked} = this.props;
        if (display === 'mobile' && activateClicked) {
            let $card = document.getElementsByClassName('subTopic-card-mobile');
            let t1 = new TimelineLite();
            t1.add(TweenLite.from($card, 0.5, {scale: 0.3, opacity: 0}, 0), "+=0");
            t1.add(TweenLite.from(document.getElementsByClassName('subTopic-card-title'), 0.5, {
                ease: Bounce.easeOut,
                scale: 0.5,
                opacity: 0
            }, 0), "=0");
            t1.add(TweenLite.from(document.getElementsByClassName('subTopic-card-tick'), 0.5, {
                ease: Bounce.easeOut,
                scale: 0.5,
                opacity: 0
            }, 0), "-=0.5");
            t1.add(TweenLite.fromTo(document.getElementsByClassName('subTopic-card-button'), 0.5, {
                ease: Bounce.easeOut,
                scale: 1.5,
                opacity: 0
            }, {ease: Bounce.easeOut, scale: 1, opacity: 1}), "-=0.5");
            t1.call(() => {
                TweenLite.set($card, {display: "-webkit-flex"});
                resetActionStates();
            });
        }
        if (display === 'mobile' && completedClicked) {
            let t2 = new TimelineLite();
            t2.add(TweenLite.from(document.getElementsByClassName('subTopic-card-tick'), 0.7, {
                ease: Bounce.easeOut,
                scale: 0.5,
                opacity: 0
            }, 0), "-=0.5");
            t2.call(() => {
                resetActionStates();
            });
        }
    }

    render() {
        const {subTopic, setCompleteSubTopic, display} = this.props;
        return (
            <div
                className={display === 'mobile' ? 'subTopic-card-mobile' : 'subTopic-card-desktop'}
                style={{
                    backgroundImage: 'url(' + background + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                }}
            >

                <div className="subTopic-card-title">
                    <h3>{`${subTopic.index}. ${subTopic.title}`}</h3>
                </div>

                <div className="subTopic-card-tick">
                    {subTopic.completed ? <CardTick stroke="#FFF" fill={"#50D2C2"}/> : null}
                </div>

                <div className="subTopic-card-button" onClick={() => setCompleteSubTopic(subTopic.index)}>
                    { subTopic.completed ? "Completed!" : "Let's Go!" }
                </div>

            </div>
        )
    }
}

SubTopicCard.propTypes = {
    subTopic: PropTypes.object.isRequired,
    setCompleteSubTopic: PropTypes.func,
    display: PropTypes.string.isRequired
};

export default SubTopicCard;
