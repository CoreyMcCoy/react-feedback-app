import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext);
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback data to display yet.</p>;
    }

    return isLoading ? (
        <Spinner />
    ) : (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default FeedbackList;
