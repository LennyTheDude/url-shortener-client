import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook'; 
import { useRoutes } from './routes';
import { Navbar } from './components/Navbar';

function App() {
    const { token, userId, login, logout } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{
            token, userId, login, logout
        }}>
            <Router>
                {isAuthenticated && <Navbar></Navbar> }
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    )
}

export default App;