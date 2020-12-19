import React from 'react'
import Layout from '../src/components/Layout/Layout'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Respuesta from '../src/container/Respuesta'
import Landing from '../src/container/Landing'

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/Respuesta' component={Respuesta} />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
