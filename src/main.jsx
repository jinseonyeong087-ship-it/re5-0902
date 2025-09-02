// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// 1) TUI Grid 기본 스타일 먼저
import 'tui-grid/dist/tui-grid.css'

// 2) 우리 전역 스타일(폰트/오버라이드)은 나중에
import './index.css'

import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)