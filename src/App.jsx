import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AppLayout from './pages/AppLayout';
import Board from './components/Board/Board';
import Backlog from './components/Backlog/Backlog';
import Ticket from './components/Ticket/Ticket';
import AddTask from './components/AddTask/AddTask';
import PageNotFound from './pages/PageNotFound';
import Container from './UI/Container/Container';

function App() {
    return (
        <Container>
            <HashRouter>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path='app' element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate replace to='board' />}
                        />
                        <Route path='board' element={<Board />} />
                        <Route path='backlog' element={<Backlog />} />
                        <Route path='ticket/:id' element={<Ticket />} />
                        <Route path='new' element={<AddTask />} />
                    </Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </HashRouter>
        </Container>
    );
}

export default App;
