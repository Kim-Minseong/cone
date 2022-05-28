import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ICoin } from '../coin';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';
import Loading from '../components/Loading';

const Wrapper = styled.div`
    padding: 0 5em;
`;

const Title = styled.h1`
    font-size: 32px;
    margin: 1em 0;
`;

const CoinTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CoinList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    padding: 20px 0px;
    margin-bottom: 1.5em;
    justify-items: center;
    a {
        width: 100%;
    }
`;
const Coin = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 5%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    img {
        max-width: 4em;
        margin-bottom: 1em;
        border-radius: 10%;
    }
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(1.05);
    }
`;

const ViewMore = styled.div`
    display: flex;
    justify-content: center;
    font-size: 18px;
    text-align: center;
    margin-bottom: 5em;
    a {
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 4%;
        padding: 1em;
        transition: all 0.3s ease-in-out;
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
            transform: scale(1.1);
        }
    }
`;

const Home = () => {
    const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);

    return (
        <>
            <Wrapper>
                <Header></Header>
                <Section></Section>
                <CoinTitle>
                    <Title>Coins</Title>
                </CoinTitle>
                {isLoading ? (
                    <Loading />
                ) : (
                    <CoinList>
                        {data?.slice(0, 20).map((coin) => (
                            <Link
                                to={`/coins/${coin.id}`}
                                key={coin.id}
                                state={{ coinId: coin.id, coinName: coin.name }}
                            >
                                <Coin>
                                    <img
                                        src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                        alt="coinImg"
                                    />
                                    <span>{coin.name}</span>
                                </Coin>
                            </Link>
                        ))}
                    </CoinList>
                )}
                <ViewMore>
                    <Link to={`/coins`}>View more</Link>
                </ViewMore>
            </Wrapper>
            <Footer></Footer>
        </>
    );
};

export default Home;
