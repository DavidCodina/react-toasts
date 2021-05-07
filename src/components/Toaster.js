import React, { useState, useRef, useEffect, createContext, useContext } from 'react';


//////////////////////////////////////////////////////////////////////////////
//
//  This file contains Toast, Toaster, ToastContext, and useCreateToast.
//  It's a lot for a single file, but this makes it portable. Morever,
//  I didn't want to expose Toast, or ToastContext.
//  Instead, all you have to do is use:
//
//    <Toaster clearAllDuration={5000}>
//      ...
//    </Toaster>
//
//  As a wrapper at the App level. Then use const createToast = useCreateToast();
//  In whatever component you want to generate toast notifications from. For example:
//
//   const createToast = useCreateToast();
//  
//   ...
// 
//    onClick={() => createToast({ 
//      header:   'Secondary Toast:', 
//      body:     'Bla, bla, bla...'
//      theme:    'secondary',
//      duration: 5000 
//    })}
//
//////////////////////////////////////////////////////////////////////////////


/* ===========================================================================
                                Toast
=========================================================================== */
// This component is used by Toaster to map individual toasts. It's like a
// what an <li> is to a <ul>.


function Toast({ toast }){
  let { header, body, classes, duration } = toast;
  const [toastClasses, setToastClasses ]  = useState('toast rounded-3');
  const toastRef                          = useRef();

  header   = header   || 'Header Not Set!';
  body     = body     || 'No text has been passed to body';
  classes  = classes  || 'toast toast-secondary rounded-3 fade show';
  duration = duration || 5000;


  useEffect(() => {
    // Add classes at 150ms in to initiate slide-in.
    setTimeout(() => { setToastClasses(classes); }, 150);

    // Remove .show at duration to slide-out.
    setTimeout(() => { 
      if (toastRef.current){ toastRef.current.classList.remove('show'); }
    }, duration);

    // Collapse the toast.
    setTimeout(() => { 
      if (toastRef.current){ 
        toastRef.current.style.height = toastRef.current.offsetHeight + 'px';
        void(toastRef.current.offsetHeight); // force reflow.
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
        <strong className="me-auto">{header}</strong>
        <button className="btn-close" type="button" onClick={dismiss}></button>
      </div>
      <div className="toast-body">{body}</div>
    </div> 
  );
}


/* ===========================================================================
                                Toaster
=========================================================================== */
// Toaster wraps ToastContext.Provider and provides extra functionality.


// Neither of these need to be exported. Instead, use the useCreateToast hook.
const ToastContext  = createContext({});
// const ToastConsumer = ToastContext.Consumer;


export const Toaster = ({ clearAllDuration, children }) => {
  const [ toasts, setToasts ] = useState([]);


  useEffect(() => {
    // 500ms is tacked on to the clearAllDuration to allow enough time 
    // for the final toast to animate off canvas and collapse.
    const timeout = setTimeout(() => {  setToasts([]); }, clearAllDuration + 500);
    return () => { clearTimeout(timeout); };
  }, [toasts, setToasts, clearAllDuration]);


  // A helper function to create Toasts.
  // This makes it easier for the user to define new toasts
  // without having to interact directly with the toasts array.
  const createToast = (config = {}) => {
    config.header   = config.header   || "Header Goes Here:";
    config.body     = config.body     || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    config.theme    = config.theme    || "primary";
    config.duration = config.duration || 5000;


    const newToast = {
      header:  config.header,
      body:    config.body,
      classes: `toast toast-${config.theme} rounded-3 fade show`,
      duration: config.duration
    };

    setToasts(currentToasts => [ ...currentToasts, newToast ]);
  }


  return (
    <ToastContext.Provider value={{ /* toasts, setToasts, */ createToast }}>
      <div className="toast-container">
        { toasts.map((toast, index) => { return <Toast key={index} toast={toast} />; }) }
      </div>

      { children }
    </ToastContext.Provider>
  );
};


/* ===========================================================================
                                useCreateToast
=========================================================================== */
// useCreateToast allows the user to hook into the ToastContext through a createToast
// convenience function, rather than interacting directly with toasts, or setToasts.
// A custom hook for convenience instead of
// import React, { useContext } from 'react';
// import { ToastContext } from './Toaster';
// const { createToast } = useContext(ToastContext);


export const useCreateToast = () => {
  const { createToast } = useContext(ToastContext);                            
  return createToast;
}


export default Toaster;