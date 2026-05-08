import { createRoot } from 'react-dom/client'
import Home from './home.jsx';
import Contact from './contact.jsx';
import About from './about.jsx';
import NotFoundPage from './NotFound.jsx';

const root = createRoot(document.getElementById('root'));



  const pathname = window.location.pathname;
  console.log ("current pathname :" ,pathname);

  if (pathname === "/") {
    root.render(
      <Home/>
    )
  } else if (pathname === "/Contact") {
    root.render(
      <Contact/>
    )
  } else if (pathname === "/About") {
    root.render(
      <About/>
    )
  } else{
    root.render(
      <NotFoundPage/>
    )
  }
  