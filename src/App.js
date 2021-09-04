import { useEffect } from 'react';
import Header from './components/layout/Header/Header.jsx';
import LinkContainer from './components/Pages/LinkContainer/LinkContainer.jsx';
import './consts/colors.css';
function App() {
    useEffect(() => {});
    return (
        <>
            <Header />
            <LinkContainer />
        </>
    );
}

export default App;
