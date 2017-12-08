alert("Hiiilarious");

import React from 'react';
import { render } from 'react-dom';
import Blog from './components/Blog';
import './css/style.css';
import { BrowserRouter, Match, Miss } from 'react-router';

render(<Blog />, document.getElementById('main'));