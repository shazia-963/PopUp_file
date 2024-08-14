import { useState } from "react"
import Modal from "./components/Modal"
import './styles.css'

function App() {
  const[showModal,setShowModal] = useState(false)
  return (
    <div  className="h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white">
      <h1 className="text-5xl  font-bold mt-4 text-center text-blue-400">Popup Modal</h1>
      <button onClick={()=> setShowModal(true)} className='bg-violet-500 px-4 py-2 rounded-lg text-lg'>Get the e-book</button>
        {showModal &&<Modal onClose={() => setShowModal(false)}/>}
    </div>
  )
}

export default App


