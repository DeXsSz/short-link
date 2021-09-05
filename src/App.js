import { useEffect } from 'react';
import './consts/colors.css';
import { UserProvider } from './stateManagement/context/UserProvider.js';
import Home from './views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    useEffect(() => {});
    return (
        <UserProvider>
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </UserProvider>
    );
}

export default App;
