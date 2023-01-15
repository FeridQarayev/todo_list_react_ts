import React from 'react';
import Content from './components/Content';
import ContentFooter from './components/ContentFooter';
import Footer from './components/Footer';
import Header from './components/Header';
import "./App.css"

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
        <ContentFooter />
      </section>
      <Footer />
    </>
  );
}

export default App;
