import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { useEffect } from 'react';

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
    <h2 className='text-center'>Welcome to MediBookQ</h2>
  );
}

export default App;