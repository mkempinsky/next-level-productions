import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import useOnScreen from '../../lib/hooks/useOnScreen';
import {useRef} from 'react';

const getPackageItems = (obj) => {
    if (!obj || typeof obj !== 'object') return [];
    let arr = [];
    for (const [key, value] of Object.entries(obj)) {
        if (key !== 'id' && key !== 'title' && value) {
            arr.push(value);
        }
    }
    return arr;
};

const SectionPackages = ({data = []}) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '');

    // package one
    const packageOne = data?.[0] || [];
    const packageOneTitle = packageOne?.title || '';
    const packageOneItems = getPackageItems(packageOne);

    // package two
    const packageTwo = data?.[1] || [];
    const packageTwoTitle = packageTwo?.title || '';
    const packageTwoItems = getPackageItems(packageTwo);

    // package three
    const packageThree = data?.[2] || [];
    const packageThreeTitle = packageThree?.title || '';
    const packageThreeItems = getPackageItems(packageThree);

    const animatedClass = onScreen ? 'animate__animated animate__fadeIn ' : '';

    return (
        <section id="section-packages">
            <Container>
                <SectionHeader title="Packages" subtitle="Names and Descriptions" />
                <div ref={ref} className={`card-container ${animatedClass}`}>
                    <div className="card">
                        <img src="/packages_classic.png" />
                        <div
                            className="card__title"
                            dangerouslySetInnerHTML={{__html: packageOneTitle}}
                        />
                        <ul>
                            {Array.isArray(packageOneItems) &&
                                packageOneItems.map((item, index) => {
                                    return (
                                        <li
                                            key={item}
                                            dangerouslySetInnerHTML={{__html: item}}
                                        />
                                    );
                                })}
                        </ul>
                    </div>
                    <div className="card">
                        <img src="/packages_next-level.png" />
                        <div
                            className="card__title"
                            dangerouslySetInnerHTML={{__html: packageTwoTitle}}
                        />
                        <ul>
                            {Array.isArray(packageTwoItems) &&
                                packageTwoItems.map((item, index) => {
                                    return (
                                        <li
                                            key={item}
                                            dangerouslySetInnerHTML={{__html: item}}
                                        />
                                    );
                                })}
                        </ul>
                    </div>
                    <div className="card">
                        <img src="/packages_production.png" />
                        <div
                            className="card__title"
                            dangerouslySetInnerHTML={{__html: packageThreeTitle}}
                        />{' '}
                        <ul>
                            {Array.isArray(packageThreeItems) &&
                                packageThreeItems.map((item, index) => {
                                    return (
                                        <li
                                            key={item}
                                            dangerouslySetInnerHTML={{__html: item}}
                                        />
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </Container>
            <style jsx>
                {`
                    .card-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card-container {
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr;
                            grid-gap: 30px;
                        }
                    }
                    .card {
                        width: 100%;
                        background: #fff;
                        border-radius: 5px;
                        padding: 15px;
                        margin-bottom: 30px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card {
                            margin-bottom: 0px;
                        }
                    }
                    .card img {
                        margin: 0 auto 15px auto;
                        display: flex;
                        align-items: center;
                    }
                    .card__title {
                        font-family: var(--font-primary);
                        margin-bottom: 15px;
                        font-weight: bold;
                        text-align: center;
                        line-height: 28px;
                        height: 56px;
                        font-size: 22px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .card ul {
                        margin: 0;
                        list-style: none;
                    }
                    .card li {
                        font-family: var(--font-secondary);
                        padding: 3px 15px;
                        max-width: 350px;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .card li:before {
                        content: '•';
                        color: var(--primary);
                        margin-right: 10px;
                    }
                    .card__note {
                        font-size: 12px;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionPackages;
