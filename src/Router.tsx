import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Coins from './routes/Coins';
import Coin from './routes/Coin';

const Router = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coins" element={<Coins />} />
                <Route path="/coins/:coinId" element={<Coin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
