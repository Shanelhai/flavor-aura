import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For React Router v6
import Menu from '../Menu/Menu';  
import Restaurant from '../Add Restaurant/Restaurant';
import Services from './Services';  

const Serviceapp = () => {
    return (
        <Router>
            <Routes> {/* Updated for React Router v6 */}
                <Route path="/" element={<Services />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/restaurant" element={<Restaurant />} />
            </Routes>
        </Router>
    );
};

export default Serviceapp;
