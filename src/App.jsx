import React from 'react';

import ButtonDemoLayout from './components/Button/ButtonDemoLayout';
const App = () => {

  return (
    <div className="container p-4 mx-auto">
      <div className='py-4 border-b'>
        <h1 className='text-xl font-semibold text-slate-800'>React Components</h1>
      </div>

      <div className="flex flex-col space-y-4">
        <ButtonDemoLayout />
        
      </div>

    </div>
  );
};

export default App;
