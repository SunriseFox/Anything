import React from 'react';
import { render } from 'react-dom';

import { createUseStyles, jss } from 'react-jss';

const useStyles = createUseStyles({
    hint: {
        position: 'fixed',
        top: 0,
        left: 0,
        fontSize: 36,
    },
    text: {
        color: 'orange',
    },
});

function ContentScript() {
    const classes = useStyles();
    return (
        <div className={classes.hint}>
            <span className={classes.text}>Anything!</span>
        </div>
    );
}

window.addEventListener('DOMContentLoaded', () => {
    const div = document.createElement('span');
    document.body.append(div);

    const shadowRoot = div.attachShadow({ mode: 'closed' });
    const target = document.createElement('div');
    shadowRoot.appendChild(target);

    jss.setup({ insertionPoint: target });

    render(<ContentScript />, target);
});
