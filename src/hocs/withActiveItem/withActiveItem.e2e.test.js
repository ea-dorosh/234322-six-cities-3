import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from "./withActiveItem.jsx";

configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;

it(`Should toggle component`, () => {
  const MockComponentWrapped = withActiveItem(MockComponent);
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.props().isOpened).toBe(false);
  wrapper.props().handleToggleClick();
  expect(wrapper.props().isOpened).toBe(true);
});
