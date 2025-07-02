
import 'bootstrap/dist/css/bootstrap.min.css';
import './gutenberg.css';
import './App.css';

import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

import Naslovna from './components/pages/Naslovna';
import Foto from './components/pages/Foto';
import Video from './components/pages/Video';
import Blog from './components/pages/Blog';
import BlogSingle from './components/pages/BlogSingle';
import Kontakt from './components/pages/Kontakt';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Naslovna/>} />
          <Route path="/foto" element={<Foto />} />
          <Route path="/video" element={<Video />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        
        
        

        <Footer />
      </div>
    </Router>
  );
}

export default App;
