import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AIVideoGenerator from './pages/AIVideoGenerator/AIVideoGenerator';
import TranslateDemo from './pages/TranslateDemo/TranslateDemo';
import UserCenter from './pages/UserCenter/UserCenter';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';
import OfflineMode from './pages/OfflineMode/OfflineMode';
import './assets/styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-video" element={<AIVideoGenerator />} />
        <Route path="/translate" element={<TranslateDemo />} />
        <Route path="/user" element={<UserCenter />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/offline" element={<OfflineMode />} />
      </Routes>
    </Router>
  );
}

export default App;
