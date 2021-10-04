import { render } from 'react-dom';
import { App } from './App';

// import { defineCustomElements, applyPolyfills } from 'reginaldoboeke-test-web-components/loader';

render(<App />, document.getElementById('root'));

// applyPolyfills().then(() => {
//   defineCustomElements(window);
// })
