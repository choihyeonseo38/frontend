import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// ✅ 추가: 라우터 관련 import
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import TrelloClone from './pages/TrelloClone' // 이 컴포넌트는 별도 생성해야 해

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter> {/* ✅ BrowserRouter로 감싸기 */}
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        {/* ✅ 추가: trello-clone 링크와 라우팅 */}
        <div style={{ marginTop: '2rem' }}>
          <Link to="/trello-clone">Go to Trello Clone</Link>
        </div>

        <Routes>
          <Route path="/trello-clone" element={<TrelloClone />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
