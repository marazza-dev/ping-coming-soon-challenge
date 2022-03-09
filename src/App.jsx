import "./App.scss";
import logo from "./images/logo.svg";
import heroImg from "./images/illustration-dashboard.png";

import { Header, Form, Footer } from "./components";

const App = () => {
  return (
    <main className='container'>
      <img src={logo} alt='ping brand logo' className='logo' />
      <Header />
      <Form />
      <img
        src={heroImg}
        alt='illustrated dashboard'
        className='hero-image'
        sizes='(min-width: 40em) 80vw, 100vw'
      />
      <Footer />
    </main>
  );
};

export default App;
