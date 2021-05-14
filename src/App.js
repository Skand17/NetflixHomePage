import React, {useMemo, useState } from 'react'
import styled from 'styled-components'
import './App.css';
import Header from './components/Header/header'
import Banner from './components/Banner/banner'

function App() {
  return (
      <Container>
          <Header/>
          <Banner/>
      </Container>
  );
}

const Container = styled.main`
  width: 100%;
`



export default App;