import {scrollToElement} from '../../lib/utils';
import Link from 'next/link';
import {withRouter} from 'next/router';
import {useRouter} from 'next/router';

const NavDesktop = (props) => {
    const router = useRouter();
    const pathname = props?.router?.pathname || '';

    const handleRouting = (section) => {
        if (pathname === '/') {
            scrollToElement(section);
        } else {
            router.push(`/#${section}`, '');
        }
    };
    return (
        <div className="nav-desktop">
            <div className="link-container">
                <div className="logo">
                    <div>
                        <Link href="/">
                            <a>
                                <img src="RSDJS_horizontal_logo.png" />
                            </a>
                        </Link>
                        <div>Let's create your dream celebration</div>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li onClick={() => handleRouting('section-about')}>About Us</li>
                    <li onClick={() => handleRouting('section-packages')}>Packages</li>
                    <li onClick={() => handleRouting('section-gallery')}>Gallery</li>
                </ul>
            </div>
            <style jsx>
                {`
                    .nav-desktop {
                        position: fixed;
                        display: grid;
                        grid-template-columns: 120px auto;
                        align-items: flex-start;
                        width: 100%;
                        z-index: 10;
                        background: linear-gradient(
                            to bottom,
                            rgb(20, 30, 48),
                            rgba(20, 30, 48, 0.9),
                            rgba(20, 30, 48, 0.6),
                            rgba(20, 30, 48, 0.3),
                            transparent
                        );
                    }
                    a {
                        color: #fff;
                        text-decoration: none;
                    }
                    .link-container {
                        display: flex;
                        justify-content: space-between;
                    }
                    .logo {
                        display: flex;
                        align-items: center;
                        padding-left: 30px;
                        color: var(--orange);
                        font-family: var(--font-primary);
                        font-size: 12px;
                        font-weight: bold;
                        text-transform: capitalize;
                    }
                    .logo img {
                        margin-bottom: 5px;
                        display: block;
                    }
                    ul {
                        margin: 0;
                        font-family: var(--font-primary);
                        display: flex;
                        align-items: flex-end;
                        justify-content: flex-end;
                        list-style: none;
                        padding: 0 20px;
                        height: 100px;
                        font-weight: bold;
                    }
                    li {
                        width: 120px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        cursor: pointer;
                        border-top: 3px solid transparent;
                    }
                    li:hover {
                        border-top: 3px solid var(--interactive);
                    }
                    li:last-child {
                        width: auto;
                        cursor: auto;
                    }
                    li:last-child:hover {
                        border-top: 3px solid transparent;
                    }
                `}
            </style>
        </div>
    );
};
export default withRouter(NavDesktop);
