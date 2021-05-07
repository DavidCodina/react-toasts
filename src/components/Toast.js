import React, { useState, useEffect, useRef } from 'react';


function Toast({ toast }){
  let { header, body, classes, duration } = toast;
  const [toastClasses, setToastClasses ]  = useState('toast rounded-3');
  const toastRef                          = useRef();

  header   = header   || 'Header Not Set!';
  body     = body     || 'No text has been passed to body';
  classes  = classes  || 'toast toast-secondary rounded-3 fade show';
  duration = duration || 5000;


  useEffect(() => {
    // Add classes at 150ms to initiate slide-in.
    setTimeout(() => { setToastClasses(classes); }, 150);

    // Remove .show at duration to slide-out.
    setTimeout(() => { 
      if (toastRef.current){ toastRef.current.classList.remove('show'); }
    }, duration);

    // Collapse the toast.
    setTimeout(() => { 
      if (toastRef.current){ 
        toastRef.current.style.height      = toastRef.current.offsetHeight + 'px';
        void(toastRef.current.offsetHeight); //force reflow.
        toastRef.current.style.height      = '0px';
        toastRef.current.style.padding     = '0px'; 
        toastRef.current.style.borderWidth = '0px'; 
    
      }
    }, duration + 300);

    
    setTimeout(() => { 
      if (toastRef.current){ toastRef.current.classList.add('d-none'); }
    }, duration + 500);
  }, [classes, duration]);


  const dismiss = () => {
    if (toastRef.current){
      toastRef.current.classList.remove('show');
      setTimeout(() => { toastRef.current.classList.add('d-none'); }, 500);
    }
  }
  

  return (
    <div id="custom-toast" ref={toastRef} className={toastClasses}>
      <div className="toast-header">
        <strong className="me-auto">{ header }</strong>
        <button className="btn-close" type="button" onClick={dismiss}></button>
      </div>
      <div className="toast-body">{ body }</div>
    </div> 
  );
}


export default Toast;