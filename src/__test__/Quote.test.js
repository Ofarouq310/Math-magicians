import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../components/Quote';

describe('check Quote', () => {
  const tree = renderer.create(<Router><Quote /></Router>).toJSON();
  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});