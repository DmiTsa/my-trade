import RestrictionWindowSize from './components/RestrictionWindowSize/RestrictionWindowSize'
import Aside from './components/Aside/Aside'
import Trade from './components/Trade/Trade'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <RestrictionWindowSize>
      <div className="flex mx-auto">
        <Aside />
        <Trade />
      </div>
    </RestrictionWindowSize>
  )
}

export default App
