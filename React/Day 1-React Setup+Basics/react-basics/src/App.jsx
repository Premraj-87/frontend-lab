/*
1.Components 
2.JSX
3.Props 
4.Small UI build 
*/
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="box">
     <Header />
     <About name="Prem" role="Frontend Developer"/>
     <Skills/>
     
     <Footer/>
    </div>
  )
}
export default App