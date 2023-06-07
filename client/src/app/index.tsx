import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';
import { Navbar, Footer } from '../components';
import './style/main.scss';

export const App = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<HomePage />}/>
            </Routes>
            <Footer />
        </>

    )
}