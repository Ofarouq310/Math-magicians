import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('check Navbar', () => {
  const tree = renderer.create(<Router><NavBar /></Router>).toJSON();
  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
