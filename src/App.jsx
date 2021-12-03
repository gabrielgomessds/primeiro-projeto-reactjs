import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Info from './components/Info/Info'
import Dicas from './components/Dicas/Dicas'
import Footer from './components/Footer/Footer';
import './App.css';



const App = () =>{
    return (
        <>
            <Header/>
            <Banner/>
            <Info/>
            <Dicas/>
            <Footer/>
        </>
    )
}

export default App;