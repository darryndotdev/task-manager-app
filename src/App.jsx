import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Backlog from './pages/Backlog';
import Ticket from './components/Ticket/Ticket';
import Form from './components/Form/Form';
import PageNotFound from './components/PageNotFound.jsx/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />}>
                    <Route path='ticket/:id' element={<Ticket />} />
                    <Route path='form' element={<Form />} />
                </Route>
                <Route path='backlog' element={<Backlog />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
