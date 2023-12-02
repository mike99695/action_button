import AuthBlock from "./components/Authorization/AuthBlock";
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import SelectOption from "./components/SelectOption";
import AddDocument from "./components/AddDocument";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthBlock />}></Route>
          <Route path='/selectOption' element={<SelectOption />}></Route>
          <Route path='/addDocument' element={<AddDocument />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
