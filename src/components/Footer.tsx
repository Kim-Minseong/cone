import styled from 'styled-components';

const FooterStyle = styled.footer`
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    .footer__wrapper {
        margin-top: 3em;
        display: flex;
        justify-content: space-around;
        padding-bottom: 3em;
    }

    .footer__content {
        display: flex;
        flex-direction: column;
    }

    .footer__content-title {
        font-size: 20px;
        margin-bottom: 1.5em;
        font-weight: bold;
    }
    .footer__content-menu {
        li {
            margin-bottom: 0.8em;
            text-align: center;
            cursor: pointer;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyle>
            <div className="footer__wrapper">
                <div className="footer__content">
                    <div className="footer__content-title">Therm</div>
                    <ul className="footer__content-menu">
                        <li>Service Price</li>
                        <li>View Chart</li>
                    </ul>
                </div>

                <div className="footer__content">
                    <div className="footer__content-title">Document</div>
                    <ul className="footer__content-menu">
                        <li>Price Setting</li>
                        <li>Chart Setting</li>
                    </ul>
                </div>
                <div className="footer__content">
                    <div className="footer__content-title">API</div>
                    <ul className="footer__content-menu">
                        <li>Price</li>
                        <li>Chart</li>
                    </ul>
                </div>
                <div className="footer__content">
                    <div className="footer__content-title">Social</div>
                    <ul className="footer__content-menu">
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </div>
        </FooterStyle>
    );
};

export default Footer;
