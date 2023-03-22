import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';

import Home from './pages/Home';
import Article from './pages/Article';
import Consultation from './pages/Consultation';
import Profile from './pages/Profile';
import ConsultationForm from './pages/ConsultationForm';
import AddArticle from './pages/AddArticle';
import ReservasiData from './pages/ReservasiData';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/consultation-form" element={<ConsultationForm />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/reservasi-data" element={<ReservasiData />} />
      </Routes>
    </>
  );
}

export default App;
