import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
        setFeedbackEdit({
            item: {},
            edit: false,
        });
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                addFeedback,
                deleteFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
