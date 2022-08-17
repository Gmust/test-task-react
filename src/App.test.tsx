import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', ()=>{
  it('App render',()=>{
    render(<App/>);
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})