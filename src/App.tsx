import { Suspense, useState } from 'react'
import './App.css'
import WasmComponent from './AsmComponent';

function App() {
  return (
    <div className="bg-slate-800 p-24">
      <p>This is a basic Vite app to test WASM functionality in-repo.</p>
      <p>Vite was chosen in favor of Next to allow deployment of this bundle to IPFS</p>
      <p>If bundle size is an issue, we can move to Preact, or load dependencies referentially.</p>
      <p>View the network tab to see that the WASM is being imported</p>
      <div className="flex items-center mt-8 flex-col">

        <div>
          <div>Step 2</div>
          <WasmComponent />
        </div>
      </div>
    </div>  
  )
}

export default App
