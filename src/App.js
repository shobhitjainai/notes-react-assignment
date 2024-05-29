import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './onboarding/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './onboarding/LoginPage';
import RequiresAuth from './Authentication/Auth';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<SignUpPage />} />
            <Route path='/dashboard' element={<RequiresAuth><DashboardPage /></RequiresAuth>} />
            <Route path='/profile' element={<RequiresAuth><ProfilePage /></RequiresAuth>} />
        </Routes>
    );
}

export default App;
