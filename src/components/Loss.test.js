import React from 'react';
import ReactDOM from 'react-dom';
import { Loss } from './Loss';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loss />, div);
  ReactDOM.unmountComponentAtNode(div);
});
