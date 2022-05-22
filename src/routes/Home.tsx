import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ICoin } from '../coin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Section from '../components/Section';

const Wrapper = styled.div`
    padding: 0 5em;
`;

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 1em;
`;

const CoinList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    padding: 20px 0px;
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
    }
`;

const Home = () => {
    const [coins, setCoins] = useState<ICoin[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            await axios
                .get('https://api.coinpaprika.com/v1/coins')
                .then((Response) => setCoins(Response.data.slice(0, 20)));
            setLoading(false);
        })();
    }, []);
    return (
        <Wrapper>
            <Header></Header>
            <Section></Section>
            <Title>Coins</Title>
            {loading ? (
                'loading...'
            ) : (
                <CoinList>
                    {coins.map((coin) => (
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
        </Wrapper>
    );
};

export default Home;
