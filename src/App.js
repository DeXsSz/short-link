import { useEffect } from 'react';
import './consts/colors.css';
import { UserProvider } from './stateManagement/context/UserProvider.js';
import Home from './views/Home/Home';
function App() {
    useEffect(() => {});
    return (
        <UserProvider>
            <Home />
        </UserProvider>
    );
}

export default App;
