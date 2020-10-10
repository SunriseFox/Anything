import React from 'react';
import { render } from 'react-dom';
import { create as createJss } from 'jss';
import { createUseStyles, JssProvider } from 'react-jss';
import preset from 'jss-preset-default';

const useStyles = createUseStyles({
    hint: {
        position: 'fixed',
        top: 0,
        left: 0,
        fontSize: 36,
        zIndex: 1000,
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

function renderInShadowRoot(div: HTMLElement, element: Parameters<typeof render>[0][0]) {
    const shadowRoot = div.attachShadow({ mode: 'closed' });
    const target = document.createElement('div');
    shadowRoot.appendChild(target);

    const jss = createJss();
    jss.setup({ ...preset(), insertionPoint: target });

    render(<JssProvider jss={jss}>{element}</JssProvider>, target);
}

window.addEventListener('DOMContentLoaded', () => {
    const div = document.createElement('span');
    document.body.append(div);

    renderInShadowRoot(div, <ContentScript />);
});
