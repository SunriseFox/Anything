import React from 'react';
import { render } from 'react-dom';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    popup: {
        width: 400,
        height: 400,
    },
});

function Popup() {
    const classes = useStyles();
    return <div className={classes.popup}>Hello World</div>;
}

render(<Popup />, document.getElementById('root'));
