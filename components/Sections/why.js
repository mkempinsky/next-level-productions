import Container from '../Container';
import SectionHeader from '../SectionHeader';
import {useRef} from 'react';
import useOnScreen from '../../lib/hooks/useOnScreen';
import {BREAKPOINT} from '../../lib/styles';

const SectionWhy = (props) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '');

    const animatedClass = onScreen
        ? 'animate__animated animate__fadeIn animate__delay-1s'
        : '';

    return (
        <section id="section-why" ref={ref}>
            <div className="parallax">
                <Container>
                    <SectionHeader title="Why Choose Next Level?" color="#fff" />
                    <div className="card-container">
                        <div className={`card ${animatedClass}`}>
                            <h4>Expert Interactive Entertainers</h4>
                            <p>
                                An amazing party is dependent on excellent entertainment,
                                which is why Next Level Productions features only the best
                                trained MCs, DJs and dancers in the Midwest. Our MCs
                                aren’t just a loud person screaming into a microphone, but
                                rather expert entertainers, trained in how to engage with
                                and perform for all ages!
                            </p>
                        </div>
                        <div className={`card ${animatedClass}`}>
                            <h4>Incredible Audiovisual Experience</h4>
                            <p>
                                While talent is the core of our company, our ability to do
                                things like show music videos and slideshows on an LED
                                curtain is certainly remarkable. Rather than just lights
                                in a ballroom, we can use lasers and high powered moving
                                head lights to bring a music festival feel to your
                                celebration! There’s almost no limit to what we can
                                create!
                            </p>
                        </div>
                        <div className={`card ${animatedClass}`}>
                            <h4>Personalized, Customizable Entertainment</h4>
                            <p>
                                We want to help create your unique, customized
                                celebration. From the timeline of your ceremonial events
                                to your personalized playlist to the lighting and AV
                                effects, we want to make sure every detail matches your
                                vision!
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <style jsx>
                {`
                    .parallax {
                        min-height: 500px;
                    }
                    .card-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card-container {
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr;
                            grid-gap: 60px;
                            align-items: flex-start;
                        }
                    }
                    .card {
                        margin-bottom: 30px;
                        background: rgba(255, 255, 255, 0.8);
                        padding: 30px 15px;
                        text-align: center;
                        border-radius: 5px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card {
                            margin-bottom: 0px;
                        }
                    }
                    .card .img {
                        margin-bottom: 30px;
                        border-radius: 5px;
                        background-size: cover;
                        background-position: center center;
                        width: 100%;
                        height: 290px;
                        border: 1px solid var(--gray-100);
                    }
                    .card p {
                        color: #000;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionWhy;
