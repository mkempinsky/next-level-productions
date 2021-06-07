import {scrollToElement} from '../../lib/utils';
import Link from 'next/link';
import {withRouter} from 'next/router';
import {useRouter} from 'next/router';
import {rockstarLink} from '../../lib/globals';

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
                                <img src="next_level_logo.png" width="200px" />
                            </a>
                        </Link>
                    </div>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li onClick={() => handleRouting('section-about')}>About Us</li>
                        <li onClick={() => handleRouting('section-packages')}>
                            Packages
                        </li>
                        <li onClick={() => handleRouting('section-gallery')}>Gallery</li>
                        <li>
                            <div>
                                <a
                                    href={rockstarLink}
                                    title="Rockstar DJs"
                                    target="_blank">
                                    <img src="RSDJS_horizontal_logo.png" width="100px" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <button onClick={() => handleRouting('section-info')}>
                                Get More Information
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {`
                    .nav-desktop {
                        position: fixed;
                        display: block;
                        grid-template-columns: 200px auto;
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
                        min-width: 100%;
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
                        border-top: 3px solid var(--primary);
                    }
                    li:last-child {
                        width: auto;
                        cursor: auto;
                    }
                    li:last-child:hover {
                        border-top: 3px solid transparent;
                    }
                    button {
                        border: none;
                        background: var(--primary);
                        padding: 0 30px;
                        color: #fff;
                        font-weight: bold;
                        border-radius: 5px;
                        height: 45px;
                        margin-left: 10px;
                        font-family: var(--font-primary);
                    }
                    button:hover {
                        cursor: pointer;
                        background: var(--primary-400);
                    }
                `}
            </style>
        </div>
    );
};
export default withRouter(NavDesktop);
