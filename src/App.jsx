import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AppLayout from './pages/AppLayout';
import Board from './pages/Board';
import Ticket from './components/Ticket/Ticket';
import Form from './components/Form/Form';
import Backlog from './pages/Backlog';
import PageNotFound from './pages/PageNotFound';
import Container from './UI/Container/Container';

function App() {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path='app' element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate replace to='board' />}
                        />
                        <Route path='board' element={<Board />} />
                        <Route path='ticket/:id' element={<Ticket />} />
                        <Route path='form' element={<Form />} />
                        <Route path='backlog' element={<Backlog />} />
                    </Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
