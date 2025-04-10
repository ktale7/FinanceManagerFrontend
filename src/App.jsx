import { Route, Routes } from 'react-router-dom'; 
import Portfolio from "./pages/Portfolio"; 
import Chatbot from "./pages/Chatbot";
import AllStocks from "./pages/AllStocks" 
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
    {/* BG */}
    <div className='fixed inset-0 z-0'>
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
      <div className='absolute inset-0 backdrop-blur-sm' />
    </div>

    <Sidebar />

    <Routes>
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/Chatbot' element={<Chatbot />} />
      <Route path='/AllStocks' element={<AllStocks />} />
    </Routes>
  </div>
  )
}

export default App; 


