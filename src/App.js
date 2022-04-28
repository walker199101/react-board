import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Board from './components/board';
import BoardCreate from './components/boardCreate';
import { BoardProvider } from './boardContext';

function App() {
  return (
    <BoardProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Board />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/create" element={ <BoardCreate />} />
          <Route exact path={"*"} element={<h1>NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </BoardProvider>
  );
}

export default App;
