import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import AppRouter from './router/AppRouter';
import Header from './components/Header/header';

function App() {
  
  return (
    <>
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
    </>
  )
}

export default App
