import Aside from './components/Aside/Aside'
import Trade from './components/Trade/Trade'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <div className="container flex mx-auto">
      <Aside />
      <Trade />
    </div>
  )
}

export default App
