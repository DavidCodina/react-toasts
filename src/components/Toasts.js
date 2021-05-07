import React, { useEffect } from 'react'; 
import Toast                from './Toast';


function Toasts({ toasts, setToasts, clearAllDuration = 5000 }){
  useEffect(() => {
    // 500ms is tacked on to the clearAllDuration to allow enough time 
    // for the final toast to animate off canvas and collapse.
    const timeout = setTimeout(() => { setToasts([]); }, clearAllDuration + 500);
    return () => { clearTimeout(timeout); };
  }, [toasts, setToasts, clearAllDuration]);

  return (
    <div className="toast-container">
      { toasts.map((toast, index) => { return <Toast key={index} toast={toast} />; }) }
    </div>
  );
}


export default Toasts;