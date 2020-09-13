import React from 'react';
import { render } from 'react-dom';

import browser from 'webextension-polyfill-ts';

function OptionsPage() {
    console.log(browser);
    return <h1>Hello World</h1>;
}

render(<OptionsPage />, document.getElementById('root'));
