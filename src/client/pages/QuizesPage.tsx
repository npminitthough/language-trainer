import React from 'react';
import { useAuth } from '../auth/AuthContext';

const QuizesPage: React.FC = () => {
    const {logout} = useAuth()
    async function handleLogout () {
        // update context
        logout()
    }

    return (
        <div>
            <h1>Welcome to the Quizzes Page</h1>
            <p>Here you can find various quizzes to test your knowledge.</p>
            
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default QuizesPage;