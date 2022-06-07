import React from 'react';

import CodeCell from './components/CodeCell';

const App: React.FC = () => {
  return (
    <div className='app'>
      <CodeCell />
      <CodeCell />
    </div>
  );
};

export default App;
