import React     from 'react';
import Toaster   from './components/Toaster';
import ToastTest from './components/ToastTest';
import './css/App.css';
import './css/Toast.css';


function App(){             
  return (
    <Toaster clearAllDuration={5000}>
      <main className="pb-5">
        <div className="container-fluid pt-3 px-md-5">
          <ToastTest />
        </div>        
      </main>
    </Toaster> 
  );
}


export default App;

