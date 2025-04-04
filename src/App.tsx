import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import Footer from './components/Footer'
import { UserProvider } from './components/UserContext'

function App() {
  return (
    <UserProvider>
      <Header />
      <Table />
      <Footer />
    </UserProvider>
  )
}

export default App
