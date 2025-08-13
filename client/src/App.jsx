import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import AppRoutes from './route/AppRoutes';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <AppRoutes />
  );
}

export default App;