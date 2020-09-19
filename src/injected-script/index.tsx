import React from 'react';
import { render } from 'react-dom';

[...document.images].forEach((image) => image.style.setProperty('filter', 'invert(1)', 'important'));
