import {contactEmail, emailDisplay} from '../../lib/globals';
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
                    <div className="copy">
                        For more information, questions and reservations, please contact
                        Quain at{' '}
                        <a href={contactEmail} title={emailDisplay} target="_blank">
                            {emailDisplay}
                        </a>
                    </div>
                </Container>
            </div>
            <style jsx>
                {`
                    .parallax {
                        min-height: 200px;
                    }
                    h2 {
                        color: #fff;
                        text-align: center;
                        margin-bottom: 30px;
                        text-transform: uppercase;
                    }
                    a {
                        color: #fff;
                    }
                    .copy {
                        color: #fff;
                        font-size: 22px;
                        line-height: 40px;
                        max-width: 600px;
                        text-align: center;
                        font-family: var(--font-primary);
                        margin: 0 auto;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .copy {
                            font-size: 32px;
                        }
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
