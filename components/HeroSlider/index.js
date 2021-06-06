import IconInstagram from '../Svgs/icon-instagram';
import IconFacebook from '../Svgs/icon-facebook';
import IconMail from '../Svgs/icon-mail';
import {useState, useEffect} from 'react';

const images = [
    '/galleryImages/gallery-05.jpg',
    '/galleryImages/gallery-07.jpg',
    '/galleryImages/gallery-03.jpg',
    '/galleryImages/gallery-01.jpg',
];

const titles = ['Interactive Entertainment', 'Incredible Experiences', 'Experts in AV'];

const HeroSlider = (props) => {
    const [currentImageIndex, setImageIndex] = useState(0);
    const [currentTitleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const timmer = setInterval(() => {
            setImageIndex((currentImageIndex) => {
                const nextImage = currentImageIndex + 1;
                return nextImage >= 4 ? 0 : nextImage;
            });
            return;
        }, 5000);

        return () => clearInterval(timmer);
    }, []);

    useEffect(() => {
        const timmer = setInterval(() => {
            setTitleIndex((currentTitleIndex) => {
                const nextTitle = currentTitleIndex + 1;
                return nextTitle >= 3 ? 0 : nextTitle;
            });
            return;
        }, 5000);

        return () => clearInterval(timmer);
    }, []);

    const currentImage = images[currentImageIndex];
    const currentTitle = titles[currentTitleIndex];

    return (
        <div className="hero-slider" id="section-hero">
            <div
                className="hero__background"
                style={{
                    backgroundImage: `var(--gradient-secondary), url(${currentImage})`,
                }}>
                <div className="hero__inner">
                    <div>
                        <div className="hero__title animate__backInRight">
                            {currentTitle}
                        </div>
                        <div className="hero__logo">
                            <img src="/next_level_logo.png" width="300" height="auto" />
                        </div>
                        <div className="hero__social">
                            <a
                                href="https://www.facebook.com/rockstardjstl/?fref=ts&ref=br_tf"
                                target="_blank"
                                title="Facebook">
                                <IconFacebook height={40} />
                            </a>
                            <a
                                href="https://www.instagram.com/rockstardjstl/"
                                target="_blank"
                                title="Instagram">
                                <IconInstagram fill="#fff" />
                            </a>
                            <a href="mailto:info@rockstardjs.com" title="Email">
                                <IconMail fill="#fff" width={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .hero-slider {
                    position: relative;
                }
                .hero__background {
                    max-width: 100%;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    height: 780px;
                    -webkit-transition: background-image 0.3s ease-in-out;
                    transition: background-image 0.3s ease-in-out;
                }

                .hero__inner {
                    height: 780px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                .hero__title {
                    color: var(--primary);
                    font-size: 60px;
                    font-family: var(--font-primary);
                    font-weight: bold;
                    width: 100%;
                    text-shadow: 0px 0px 10px rgba(000, 000, 000, 0.8);
                }
                .hero__logo {
                    width: 100%;
                    margin: 0 auto;
                    text-align: center;
                }
                .hero__social {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 10px;
                    max-width: 180px;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                }
                .hero__social > a {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.4);
                    border-radius: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    margin: 0 auto;
                }
                .hero__social > a:hover {
                    cursor: pointer;
                    background: var(--primary);
                    transition: all 0.25s;
                }
            `}</style>
        </div>
    );
};
export default HeroSlider;
