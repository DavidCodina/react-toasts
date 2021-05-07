import React, { useContext } from 'react';
import { Context }           from './Context';
import ToastTest             from './components/ToastTest';
import Toasts                from './components/Toasts';
import './css/App.css';
import './css/Toast.css';


function App(){             
  const { toasts, setToasts } = useContext(Context);

  return (
    <main className="pb-5">
      <div className="container-fluid pt-3 px-md-5">
        <ToastTest />

        <div class="horizontal-ruler">
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>

        { toasts && toasts.length > 0 &&  <Toasts toasts={toasts} setToasts={setToasts} clearAllDuration={5000} /> }  
      </div>        
    </main>
  );
}


export default App;

