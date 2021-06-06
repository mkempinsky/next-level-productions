import Layout from '../components/Layout';
import Head from 'next/head';
import HeroSlider from '../components/HeroSlider';
import {
    SectionIntro,
    SectionWhy,
    SectionPackages,
    SectionGallery,
    SectionInfo,
    SectionFacebook,
} from '../components/Sections';
import {formatGoogleSheetData} from '../lib/utils';
import {packagesSpreadsheetUrl} from '../lib/globals';

const HomePage = (props) => {
    const {data} = props;

    // packages data
    let packagesData = data?.packageData;
    packagesData = formatGoogleSheetData(packagesData);

    return (
        <Layout>
            <Head>
                <title>Rockstar DJs | St.Louis, MO</title>
                <meta name="title" content="Rockstar DJs | St.Louis, MO" />
                <meta property="og:url" content="http://rockstardjs.com" />
                <meta name="description" content="LET US MAKE YOUR DAY PERFECT!" />
            </Head>
            <HeroSlider />
            <SectionIntro />
            <SectionWhy />
            <SectionPackages data={packagesData} />
            <SectionFacebook />
            <SectionGallery />
            <SectionInfo />
        </Layout>
    );
};
export default HomePage;

export async function getServerSideProps(context) {
    // packages data
    let packageData = [];
    let packageResponse = {};
    try {
        packageResponse = await fetch(packagesSpreadsheetUrl);
        packageData = await packageResponse.json();
    } catch (e) {
        console.warn(e);
    }

    return {
        props: {
            data: {
                packageData,
            },
        },
    };
}
