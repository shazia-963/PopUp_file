
import React, {useRef} from'react';
import { X , Download } from 'lucide-react';

function Modal({onClose}) {
const modalRef = useRef();

const closeModal = (e) => {
  if(modalRef.current === e.target){
    onClose();
  }
}

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
  <div className='mt-10 flex flex-col gap-5 text-white-500'>
    <button onClick={onClose} className='self-end'>
      <X size={30} />
    </button>

    <div className='bg-indigo-600 rounded-xl px-8 py-6 flex flex-col gap-8 items-center mx-4'>
      <h1 className='text-3xl font-extrabold text-white'>Download FREE E-BOOK</h1>
      <p className='text-xl font-bold max-w-md text-center text-white'>
        Want to Learn How to crack Web Development Interviews like a pro!
      </p>
      <form>
        <input
          type='email'
          placeholder='Enter your email'
          required
          className='w-full px-4 py-3 text-black border-gray-300 rounded-md'
        />
        <button className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black text-white'>
          <Download/> Download eBook
        </button>
      </form>
    </div>
  </div>
</div>
 )
}
export default Modal
