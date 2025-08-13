import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from '../constants/routes';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import PharmacyPage from '../pages/PharmacyPage/PharmacyPage';

const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path={ROUTES.HOME} element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path={ROUTES.PHARMACY} element={<PharmacyPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;