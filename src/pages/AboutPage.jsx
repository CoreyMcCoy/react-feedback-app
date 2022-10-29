import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <Card>
            <h1>About This Project</h1>
            <p>This is a React app to leave feedback for a food truck.</p>
            <p>Version: 1.0.0 </p>

            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </Card>
    );
}

export default AboutPage;
