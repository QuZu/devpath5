import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import MessagePage from './pages/Message/message';
import HashPage from './pages/Showhash/hash';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:messages" element={<MessagePage />} />
      <Route path="/messages/:hashvalue" element={<HashPage />} />

    </Routes>
  );
}

export default App;
