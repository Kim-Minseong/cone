import title from '../images/title.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: ${(props) => props.theme.bgColor};
    /* background-color: rgba(0, 0, 0, 0.1); */
`;

const Nav = styled.nav`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    img {
        width: 100px;
    }
    ul {
        display: flex;
        align-items: center;
        li {
            padding: 0 15px;
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
            <Nav>
                <Link to={`/`}>
                    <img src={title} />
                </Link>

                <ul>
                    <li>
                        <Link to="/coins">Coins</Link>
                    </li>
                    <li>
                        <Link to="#">Documents</Link>
                    </li>
                    <li>
                        <Link to="#">API</Link>
                    </li>
                </ul>
            </Nav>
        </HeaderStyled>
    );
};

export default Header;
