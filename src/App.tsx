// 导入路由相关组件（保留原有，新增 Link 组件用于导航）
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// 原有页面组件
import Home from './pages/Home/Home';
import AIVideoGenerator from './pages/AIVideoGenerator/AIVideoGenerator';
import TranslateDemo from './pages/TranslateDemo/TranslateDemo';
import UserCenter from './pages/UserCenter/UserCenter';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';
import OfflineMode from './pages/OfflineMode/OfflineMode';
// 新增页面组件（发布菜谱 + 热门菜谱）
import PublishRecipe from './pages/PublishRecipe/PublishRecipe';
import RecipeList from './pages/RecipeList/RecipeList';
// 全局样式
import './assets/styles/global.css';

function App() {
  return (
    <Router>
      {/* 新增导航栏：方便快速切换到发布菜谱、热门菜谱等页面 */}
      <nav style={{ 
        padding: '15px 20px', 
        background: '#f8f9fa', 
        borderBottom: '1px solid #e9ecef', 
        marginBottom: '20px' 
      }}>
        {/* 导航链接：设置样式，区分活跃状态（可选） */}
        <Link 
          to="/" 
          style={{ 
            marginRight: '18px', 
            textDecoration: 'none', 
            color: '#212529',
            fontWeight: 500
          }}
        >
          首页
        </Link>
        <Link 
          to="/recipes" 
          style={{ 
            marginRight: '18px', 
            textDecoration: 'none', 
            color: '#212529',
            fontWeight: 500
          }}
        >
          热门菜谱
        </Link>
        <Link 
          to="/publish" 
          style={{ 
            marginRight: '18px', 
            textDecoration: 'none', 
            color: '#212529',
            fontWeight: 500
          }}
        >
          发布菜谱
        </Link>
        <Link 
          to="/ai-video" 
          style={{ 
            marginRight: '18px', 
            textDecoration: 'none', 
            color: '#212529',
            fontWeight: 500
          }}
        >
          AI 菜谱视频
        </Link>
        <Link 
          to="/user" 
          style={{ 
            textDecoration: 'none', 
            color: '#212529',
            fontWeight: 500
          }}
        >
          我的中心
        </Link>
      </nav>

      {/* 路由配置：新增发布菜谱、热门菜谱路由 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-video" element={<AIVideoGenerator />} />
        <Route path="/translate" element={<TranslateDemo />} />
        <Route path="/user" element={<UserCenter />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/offline" element={<OfflineMode />} />
        {/* 新增：热门菜谱路由 */}
        <Route path="/recipes" element={<RecipeList />} />
        {/* 新增：发布菜谱路由 */}
        <Route path="/publish" element={<PublishRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
