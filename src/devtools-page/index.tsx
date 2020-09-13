import { browser } from 'webextension-polyfill-ts';

// import React from 'react';
// import { render } from 'react-dom';

browser.devtools.panels.create('Anything', '/anything_icon32x32.png', '/devtools-page/index.html');

// render(<h1>Hello World</h1>, document.getElementById('root'));
