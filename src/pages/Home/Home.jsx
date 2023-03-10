import { Link } from 'react-router-dom';
import paths from 'src/constants/paths';

function Home() {
    return (
        <div>
            <Link to={paths.auth}>bấm vào đây để nhảy qua Auth</Link>
            <p>Home</p>
        </div>
    );
}
export default Home;
