import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import Footer from './components/Footer'
import { UserProvider } from './components/UserContext'

function App() {
  return (
    <UserProvider>
      <div className="app-container">
        <Header />
        <Table />
        <Footer />
      </div>
    </UserProvider>
  )
}

export default App
