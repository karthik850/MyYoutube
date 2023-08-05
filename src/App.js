import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import './style.css'
import Items from './component/Items';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import { useEffect, useRef } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage';
import SubscriberStory from './component/SubscribersStories';
import 'animate.css';

function App() {
  const myRef = useRef(null)

  // window.addEventListener('scroll', () => myRef.current.scrollIntoView() );
  return (
    <div className="App">
      {/* <Home/>
      <Items id="Items" ref={myRef}/>
      <Footer /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/private/stories" element={<SubscriberStory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
