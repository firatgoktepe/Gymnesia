import React from 'react';
import SignIn from '../../screens/SignIn';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

afterEach(cleanup);

describe('<SignIn />', () => {
  it('should match the snapshot', () => {
    const rendered = render(<SignIn />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  
  it('should fire onChange events', () => {
    const {getByTestId} = render(<SignIn />);
    const emailInput = getByTestId('inputEmail');
    const passwordInput = getByTestId('inputPassword');
    fireEvent.changeText(emailInput, 'test');
    fireEvent.changeText(passwordInput, 'test');
    expect(emailInput.props.value).toEqual('test');
    expect(passwordInput.props.value).toEqual('test');
  });

  it('should have true placeholder names', () => {
    const {getByTestId} = render(<SignIn />);
    const emailInput = getByTestId('inputEmail');
    const passwordInput = getByTestId('inputPassword');
    expect(emailInput.props.placeholder).toEqual('Enter your email');
    expect(passwordInput.props.placeholder).toEqual('Enter your password');
  })
  
});