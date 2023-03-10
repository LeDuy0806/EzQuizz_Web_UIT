import { useRoutes } from 'react-router-dom';
import paths from './constants/paths';
import MainLayout from './layout/MainLayout';
import Auth from './pages/Auth';
import Home from './pages/Home';

function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: paths.home,
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            ),
        },
        {
            path: paths.auth,
            element: (
                <MainLayout>
                    <Auth />
                </MainLayout>
            ),
        },
    ]);
    return routeElements;
}

export default useRouteElements;
