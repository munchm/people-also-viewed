import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('Enzyme Testing for App Component', () => {
  it('should render all linked components', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });
});