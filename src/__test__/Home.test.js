import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('check Homepage', () => {
  const tree = renderer.create(<Home />).toJSON();
  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});