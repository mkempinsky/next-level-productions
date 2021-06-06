import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';
import SectionHeader from '../SectionHeader';

const SectionInfo = (props) => {
    return (
        <section id="section-info">
            <div className="parallax">
                <Container>
                    <SectionHeader
                        title="Questions? Reservations?"
                        subtitle="Get more information today!"
                        color="#fff"
                    />
                </Container>
            </div>
            <style jsx>
                {`
                    .parallax {
                        background: linear-gradient(
                                to right,
                                rgba(15, 12, 41, 0.9),
                                rgba(48, 43, 99, 0.8),
                                rgba(36, 36, 62, 0.9)
                            ),
                            url('/dj_background.jpg');
                        min-height: 200px;
                        background-attachment: fixed;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    h2 {
                        color: #fff;
                        text-align: center;
                        margin-bottom: 30px;
                        text-transform: uppercase;
                    }
                    .copy {
                        color: #fff;
                        font-size: 32px;
                        line-height: 40px;
                        max-width: 600px;
                        text-align: center;
                        font-family: var(--font-primary);
                        margin: 0 auto;
                    }
                    img {
                        margin: 30px auto;
                        display: flex;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionInfo;
