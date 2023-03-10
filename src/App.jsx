import useRouteElements from './useRouteElements';

function App() {
    const routeElements = useRouteElements();
    return <div className='container'>{routeElements}</div>;
}

export default App;
