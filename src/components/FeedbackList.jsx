import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext);
    if (!feedback || feedback.length === 0) {
        return <p>No feedback data to display yet.</p>;
    }

    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default FeedbackList;
