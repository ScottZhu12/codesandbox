import React, { useEffect } from 'react';

import { bundle } from './bundler';
import CodeCell from './components/CodeCell';
import TextEditor from './components/TextEditor';

const App: React.FC = () => {
  // start esbuild-wasm service
  useEffect(() => {
    bundle();
  }, []);

  return (
    <div className='app'>
      <TextEditor />
      <CodeCell />
    </div>
  );
};

export default App;
