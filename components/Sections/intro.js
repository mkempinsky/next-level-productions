import SectionHeader from '../SectionHeader';
import useOnScreen from '../../lib/hooks/useOnScreen';
import {useRef} from 'react';
import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';
import {rockstarLink} from '../../lib/globals';
import {scrollToElement} from '../../lib/utils';

const SectionIntro = (props) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '');
    const animatedClass = onScreen ? 'animate__animated animate__rotateInDownLeft ' : '';

    return (
        <section id="section-about">
            <Container>
                <SectionHeader title="About Us" subtitle="What's our story?" />
                <div className="container">
                    <div ref={ref} className={`image-container ${animatedClass}`}>
                        <img className="image-1" src="/galleryImages/gallery-03.jpg" />
                        <img className="image-2" src="/galleryImages/gallery-01.jpg" />
                    </div>
                    <div>
                        <h4>
                            AFTER FOUNDING{' '}
                            <a href={rockstarLink} title="Rockstar DJs" target="_blank">
                                ROCKSTAR DJS
                            </a>{' '}
                            IN ST. LOUIS ...
                        </h4>
                        <p>
                            Quain found an immediate need for a premium, engaging
                            entertainment company specializing in bar and bat mitzvahs,
                            which led to the creation of Next Level Productions.
                        </p>
                        <p>
                            Incorporating the best in professional interactive
                            entertainers and cutting-edge audiovisual capabilities, Next
                            Level Productions has become just that. If you want the party
                            that your friends, your family, and your teens will be raving
                            about, Next Level Productions is your best choice!
                        </p>
                        <div className="button-container">
                            <button
                                className="button-1"
                                onClick={() => scrollToElement('section-packages')}>
                                Packages
                            </button>
                            <button
                                className="button-2"
                                onClick={() => scrollToElement('section-info')}>
                                Get more information!
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <style jsx>
                {`
                    .container {
                        display: block;
                        width: 100%;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .container {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            grid-gap: 60px;
                        }
                    }
                    .image-container {
                        position: relative;
                        width: 100%;
                        display: flex;
                        text-align: center;
                        margin: 100px auto 30px auto;
                    }
                    img {
                        border-radius: 100%;
                    }
                    .image-1 {
                        position: absolute;
                        top: -50px;
                        width: 150px;
                        height: 150px;
                        box-shadow: -5px 5px 15px rgba(000, 000, 000, 0.4);
                    }
                    .image-2 {
                        margin: 0 auto;
                        display: flex;
                        width: 250px;
                        height: 250px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .image-1 {
                            width: 250px;
                            height: 250px;
                        }
                        .image-2 {
                            width: 400px;
                            height: 400px;
                        }
                    }
                    a {
                        color: var(--primary);
                        text-decoration: none;
                    }
                    .button-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .button-container {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            grid-gap: 15px;
                        }
                    }
                    button {
                        display: block;
                        color: #fff;
                        text-decoration: none;
                        padding: 8px;
                        width: auto;
                        min-width: 300px;
                        font-size: 18px;
                        font-weight: bold;
                        font-family: var(--font-primary);
                        border-radius: 5px;
                        text-align: center;
                        margin: 0 auto 30px auto;
                        cursor: pointer;
                        border: none;
                        height: 45px;
                    }
                    .button-1 {
                        background: var(--gray-300);
                    }
                    .button-1:hover {
                        background: #000;
                        transition: all 0.5s;
                    }
                    .button-2 {
                        background: #000;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionIntro;
