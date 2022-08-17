import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('app component', ()=>{
  render(<App/>);
  expect(screen.getByRole('router')).toBeInTheDocument();

})