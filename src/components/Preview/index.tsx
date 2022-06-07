import React, { useRef, useEffect } from 'react';

interface PreviewProps {
  code: string;
}

// html file will be used in iframe to render contents
const html = `
<html>
<head></head>
<body>
  <div id="root"></div>
  <script>
    window.addEventListener('message', (event) => {
      try {
        eval(event.data);
      } catch (err) {
        const root = document.querySelector('#root');
        root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
        console.error(err);
        throw err;
      }
    }, false);
  </script>
</body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    // reset iframe html before user executing new code
    iframe.current.srcdoc = html;

    // enable the communication between parent window and the iframe
    iframe.current.contentWindow.postMessage(code, '*');
  }, [code]);

  return (
    <iframe
      ref={iframe}
      sandbox='allow-scripts'
      srcDoc={html}
      title='preview'
    ></iframe>
  );
};

export default Preview;
