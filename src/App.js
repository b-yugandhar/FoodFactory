import Pages from "./pages/Pages";
import './App.css'
import Category from "./components/Category";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Search from "./components/Search";
function App() {
  return (
    <div className="apps">
      <BrowserRouter>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
