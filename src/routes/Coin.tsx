import { useParams } from 'react-router-dom';

interface IParams {
    coinId: string;
}

const Coin = () => {
    const { coinId } = useParams() as unknown as IParams;
    return (
        <div>
            <h1>Coin {coinId}</h1>
        </div>
    );
};

export default Coin;
