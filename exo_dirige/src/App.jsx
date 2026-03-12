import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer.jsx'
import ListItem from '../src/components/ListItem/ListItem.jsx'
import listItemData from './data/db.js'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <h2>J'aime le développement web, et vous allez comprendre pourquoi à l'instant.</h2>
        <ListItem listItemData={listItemData} />
      </main>
      <Footer />

    </>
  )
}

export default App
