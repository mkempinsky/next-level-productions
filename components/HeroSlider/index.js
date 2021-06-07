import IconInstagram from '../Svgs/icon-instagram';
import IconFacebook from '../Svgs/icon-facebook';
import IconVimeo from '../Svgs/icon-vimeo';
import IconMail from '../Svgs/icon-mail';
import {useState, useEffect} from 'react';
import {contactEmail, facebookLink, instagramLink, vimeoLink} from '../../lib/globals';
import {BREAKPOINT} from '../../lib/styles';

const images = [
    '/galleryImages/gallery-05.jpg',
    '/galleryImages/gallery-07.jpg',
    '/galleryImages/gallery-03.jpg',
    '/galleryImages/gallery-01.jpg',
];

const HeroSlider = (props) => {
    const [currentImageIndex, setImageIndex] = useState(0);

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

    const currentImage = images[currentImageIndex];

    return (
        <div className="hero-slider" id="section-hero">
            <div
                className="hero__background"
                style={{
                    backgroundImage: `url(${currentImage})`,
                }}>
                <div className="hero__overlay">
                    <div className="hero__inner">
                        <div>
                            <div className="hero__logo">
                                <img src="/next_level_logo.png" className="logo-img" />
                            </div>
                            <div className="hero__title">
                                <div>Interactive Entertainment</div>
                                <div>|</div>
                                <div>Experts in AV</div>
                                <div>|</div>
                                <div>Incredible Experiences</div>
                            </div>
                            <div className="hero__social">
                                <a href={facebookLink} target="_blank" title="Facebook">
                                    <IconFacebook height={40} />
                                </a>
                                <a href={instagramLink} target="_blank" title="Instagram">
                                    <IconInstagram fill="#fff" />
                                </a>
                                <a href={contactEmail} target="_blank" title="Email">
                                    <IconMail fill="#fff" width={22} />
                                </a>
                                <a href={vimeoLink} target="_blank" title="Vimeo">
                                    <IconVimeo fill="#fff" width={22} />
                                </a>
                            </div>
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
                .hero__overlay {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    background: rgba(000, 000, 000, 0.75);
                }

                .hero__inner {
                    height: 780px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }

                .hero__title {
                    font-size: 14px;
                    font-family: var(--font-primary);
                    color: #fff;
                    font-weight: bold;
                    width: 100%;
                    display: flex;
                    grid-gap: 10px;

                    margin-bottom: 15px;
                    text-align: center;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    .hero__title {
                        font-size: 22px;
                        margin-bottom: 30px;
                    }
                }

                .logo-img {
                    width: 290px;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    .logo-img {
                        width: 500px;
                    }
                }
                .hero__logo {
                    width: 100%;
                    margin: 0 auto;
                    text-align: center;
                }
                .hero__social {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-gap: 10px;
                    max-width: 250px;
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
