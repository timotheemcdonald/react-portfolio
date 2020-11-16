import React from 'react'
import {Switch, Link, Route} from "react-router-dom"
import styled from 'styled-components'
import "./index.css"

import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Home from './components/Home'


const CenterTitle = styled.div`
display:flex;
justify-content:center;
margin-top: 0.50%;
margin-bottom: 0.50%;
`
const EmojiSpan = styled.span`
margin-top: 0.25%;
margin-bottom: 0.50%;
`
function App() {
  return (
    <div className="App">
      <CenterTitle>
     <h1>Tim McDonald</h1><EmojiSpan><h2>🌱</h2></EmojiSpan>
     </CenterTitle>
      <header className="App-header">
   
       
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
        <Link to ="/projects">Projects</Link>
        <Link to ="/skills">Skills</Link>
        
      
      </header>



    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path ="/">
          <Home />
        </Route>
      </Switch>
    </div>

      <footer>

      </footer>
    </div>
  );
}

export default App;
