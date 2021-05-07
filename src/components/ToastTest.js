import React              from 'react';
import { useCreateToast } from './Toaster';


function ToastTest(){
  const createToast = useCreateToast();

  return (
    <React.Fragment>
      <h2 className="my-5 text-white-3d text-center">Toast Test</h2>

      <div className="d-flex justify-content-between flex-wrap mx-auto mb-2" style={{maxWidth: 550}}>
        <button className="mb-3 btn btn-outline-primary btn-sm"   style={{minWidth: 125}} onClick={() => createToast()}>Primary Toast</button>
        <button className="mb-3 btn btn-outline-secondary btn-sm" style={{minWidth: 125}} onClick={() => createToast({ header: 'Secondary Toast:', theme: 'secondary'})}>Secondary Toast</button>
        <button className="mb-3 btn btn-outline-success btn-sm"   style={{minWidth: 125}} onClick={() => createToast({ theme: 'success', body: "Yay you did it!" })}>Success Toast</button>
        <button className="mb-3 btn btn-outline-info btn-sm"      style={{minWidth: 125}} onClick={() => createToast({ theme: 'info' })}>Info Toast</button>
        <button className="mb-3 btn btn-outline-warning btn-sm"   style={{minWidth: 125}} onClick={() => createToast({ theme: 'warning' })}>Warning Toast</button>
        <button className="mb-3 btn btn-outline-danger btn-sm"    style={{minWidth: 125}} onClick={() => createToast({theme: 'danger'})}>Danger Toast</button>
        <button className="mb-3 btn btn-outline-dark btn-sm"      style={{minWidth: 125}} onClick={() => createToast({theme: 'dark'})}>Dark Toast</button>
        <button className="mb-3 btn btn-outline-light btn-sm"     style={{minWidth: 125}} onClick={() => createToast({ theme: 'light' })}>Light Toast</button>
      </div>
    </React.Fragment>     
  );
}


export default ToastTest;