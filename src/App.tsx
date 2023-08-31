import { BrowserRouter, Route, Routes } from 'react-router-dom'

import bgCloud from 'public/bg-cloud.svg'
import { Home } from 'pages/Home'
import { Results } from 'pages/Results'

function App() {
  return (
    <main className="z-10 flex h-screen flex-row items-center justify-center overflow-hidden">
      <img src={bgCloud} className="fixed z-0 h-full w-full " />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
