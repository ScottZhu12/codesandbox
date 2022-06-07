import React, { useState, useEffect } from 'react';

import { bundle, bundledOutput } from '../../bundler';
import CodeEditor from '../CodeEditor';
import Preview from '../Preview';

const CodeCell: React.FC = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  // start esbuild-wasm service
  useEffect(() => {
    bundle();
  }, []);

  // generate transpiled and bundled code
  const onClick = async () => {
    const { code } = await bundledOutput(input);
    setCode(code);
  };

  return (
    <div className='code-cell'>
      <CodeEditor
        initialValue='const a = 1;'
        onChange={(value) => setInput(value)}
      />
      <div>
        <button type='submit' onClick={onClick}>
          Submit
        </button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
