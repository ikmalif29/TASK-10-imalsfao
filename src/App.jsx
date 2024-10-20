
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App
