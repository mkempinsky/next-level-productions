import Footer from '../Footer';
import Nav from '../Nav';
import Router from 'next/router';
import NProgress from 'nprogress';
import {BREAKPOINT} from '../../lib/styles';
import ScrollToTop from '../ScrollToTop';

Router.onRouteChangeStart = (url) => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    window.scrollTo(0, 0);
    NProgress.done();
};

Router.onRouteChangeError = () => NProgress.done();

const Layout = (props) => {
    return (
        <div className="layout">
            <Nav />
            {props.children}
            <ScrollToTop />
            <Footer />
            <style jsx>{`
                .layout {
                    position: relative;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    .layout {
                        padding-top: 0;
                }
            `}</style>
        </div>
    );
};
export default Layout;
