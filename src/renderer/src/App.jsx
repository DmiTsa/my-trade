import { Aside } from './components/Aside/Aside'
import Trade from './components/Trade/Trade'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <div className="container flex mx-auto">
      <div className="w-40 h-screen py-5 bg-blue-700 text-white flex flex-col gap-10 items-center">
        <Aside />
      </div>

      <div className="bg-blue-700/20 flex flex-1 p-4">
        <Trade />
      </div>
    </div>
  )
}

export default App
