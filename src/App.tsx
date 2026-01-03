// 移除 import React from 'react'（不再需要）
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 导入所有页面组件
import Home from './pages/Home/Home';
import PublishRecipe from './pages/PublishRecipe/PublishRecipe';
import RecipeList from './pages/RecipeList/RecipeList';
import AIVideoGenerator from './pages/AIVideoGenerator/AIVideoGenerator';
import TranslateDemo from './pages/TranslateDemo/TranslateDemo';
import UserCenter from './pages/UserCenter/UserCenter';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';
import OfflineMode from './pages/OfflineMode/OfflineMode';

// 导入公共组件
import EdgeStatus from './components/EdgeStatus/EdgeStatus';

// 导入全局样式
import './assets/styles/global.css';

function App() {
  return (
    <Router>
      {/* 顶部导航栏 */}
      <nav style={{ 
        padding: '15px 20px', 
        background: '#f8f9fa', 
        borderBottom: '1px solid #e9ecef', 
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {/* 左侧logo和导航 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>🍳</span>
            <h1 style={{ margin: 0, fontSize: '20px', color: '#ff6b35' }}>
              美食工坊 FoodCraft
            </h1>
          </div>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link 
              to="/" 
              style={{ 
                textDecoration: 'none', 
                color: '#212529',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
              className="nav-link"
            >
              首页
            </Link>
            <Link 
              to="/recipes" 
              style={{ 
                textDecoration: 'none', 
                color: '#212529',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
              className="nav-link"
            >
              热门菜谱
            </Link>
            <Link 
              to="/publish" 
              style={{ 
                textDecoration: 'none', 
                color: '#212529',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
              className="nav-link"
            >
              发布菜谱
            </Link>
            <Link 
              to="/ai-video" 
              style={{ 
                textDecoration: 'none', 
                color: '#212529',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
              className="nav-link"
            >
              AI视频生成
            </Link>
            <Link 
              to="/translate" 
              style={{ 
                textDecoration: 'none', 
                color: '#212529',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s'
              }}
              className="nav-link"
            >
              边缘翻译
            </Link>
          </div>
        </div>
        
        {/* 右侧用户相关和边缘状态 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <EdgeStatus />
          <Link 
            to="/user" 
            style={{ 
              textDecoration: 'none', 
              color: '#212529',
              fontWeight: 500,
              padding: '8px 12px',
              borderRadius: '6px',
              transition: 'all 0.3s'
            }}
            className="nav-link"
          >
            个人中心
          </Link>
          <Link 
            to="/offline" 
            style={{ 
              textDecoration: 'none', 
              color: '#666',
              fontSize: '14px',
              padding: '6px 10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              backgroundColor: '#fff'
            }}
          >
            📴 离线模式
          </Link>
        </div>
      </nav>

      {/* 主内容区域 */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/publish" element={<PublishRecipe />} />
          <Route path="/ai-video" element={<AIVideoGenerator />} />
          <Route path="/translate" element={<TranslateDemo />} />
          <Route path="/user" element={<UserCenter />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/offline" element={<OfflineMode />} />
          
          {/* 404页面 */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '100px 20px' }}>
              <h2>404 - 页面不存在</h2>
              <p>抱歉，您访问的页面不存在。</p>
              <Link 
                to="/" 
                style={{ 
                  display: 'inline-block',
                  marginTop: '20px',
                  padding: '10px 20px',
                  background: '#ff6b35',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px'
                }}
              >
                返回首页
              </Link>
            </div>
          } />
        </Routes>
      </div>

      {/* 页脚 */}
      <footer style={{ 
        marginTop: '60px',
        padding: '40px 20px',
        background: '#2d3047',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            🍳 美食工坊 FoodCraft - 基于边缘计算的美食社区
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px',
            marginBottom: '20px',
            fontSize: '14px',
            opacity: 0.8
          }}>
            <span>🚀 阿里云 ESA Pages 边缘部署</span>
            <span>⚡ 全球低延迟访问</span>
            <span>📱 离线可用菜谱</span>
            <span>🤖 AI 智能生成</span>
          </div>
          <div style={{ 
            fontSize: '12px', 
            opacity: 0.6,
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <p>
              🏆 本项目为阿里云 ESA Pages 边缘开发大赛参赛作品
              <br />
              💡 由阿里云 ESA 提供加速、计算和保护
            </p>
            <p>© 2024 美食工坊 FoodCraft. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
