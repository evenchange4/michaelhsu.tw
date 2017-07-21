import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-styled-components';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders correct snapshot', () => {
  const wrapper = mount(<App />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
