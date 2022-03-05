import "./App.scss";
import logo from "./images/logo.svg";
import heroImg from "./images/illustration-dashboard.png";

import { Header, Form, Footer } from "./components";

const App = () => {
  return (
    <main>
      <img src={logo} alt='ping brand logo' />
      <Header />
      <Form />
      <img src={heroImg} alt='illustrated dashboard' />
      <Footer />
    </main>
  );
};

export default App;
