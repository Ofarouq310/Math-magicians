import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../components/Calculator';

describe('check Calculator', () => {
  const tree = renderer.create(<Router><Calculator /></Router>).toJSON();
  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
