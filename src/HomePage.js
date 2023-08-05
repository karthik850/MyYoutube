import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import './style.css'
import Items from './component/Items';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import { useEffect, useRef } from 'react';

function HomePage() {
  const myRef = useRef(null)

  // window.addEventListener('scroll', () => myRef.current.scrollIntoView() );
  return (
    <div>
      <Home/>
      <Items id="Items" ref={myRef}/>
      <Footer />
    </div>
  );
}

export default HomePage;
