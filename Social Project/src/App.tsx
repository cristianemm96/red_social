import './App.css'
import { MobileNavbar } from './components/header/MobileNavbar'
import { HeaderView } from './views/header/HeaderView'
import { MainContentView } from './views/main/MainContentView'

function App() {

  return (
    <div className="App">
      <HeaderView/>
      <MobileNavbar/>
      <MainContentView/>
    </div>
  )
}

export default App
