import React from 'react';
import SignUp from '../../screens/SignUp';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

afterEach(cleanup);

describe('<SignUp />', () => {
  it('should match the snapshot', () => {
    const rendered = render(<SignUp />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  
  it('should fire onChange events', () => {
    const {getByTestId} = render(<SignUp />);
    const nameInput = getByTestId('inputName');
    const surnameInput = getByTestId('inputSurName');
    const emailInput = getByTestId('inputEmail');
    const passwordInput = getByTestId('inputPassword');
    const passwordConfirmInput = getByTestId('inputConfirmPassword');
    fireEvent.changeText(emailInput, 'test');
    fireEvent.changeText(passwordInput, 'test');
    fireEvent.changeText(passwordConfirmInput, 'test');
    fireEvent.changeText(nameInput, 'test');
    fireEvent.changeText(surnameInput, 'test');
    expect(emailInput.props.value).toEqual('test');
    expect(passwordInput.props.value).toEqual('test');
    expect(passwordConfirmInput.props.value).toEqual('test');
    expect(nameInput.props.value).toEqual('test');
    expect(surnameInput.props.value).toEqual('test');
  });

  it('should have true placeholder names', () => {
    const {getByTestId} = render(<SignUp />);
    const nameInput = getByTestId('inputName');
    const surnameInput = getByTestId('inputSurName');
    const emailInput = getByTestId('inputEmail');
    const passwordInput = getByTestId('inputPassword');
    const passwordConfirmInput = getByTestId('inputConfirmPassword');
    expect(emailInput.props.placeholder).toEqual('Enter your email*');
    expect(passwordInput.props.placeholder).toEqual('Enter your password*');
    expect(passwordConfirmInput.props.placeholder).toEqual('Retype your password to confirm*');
    expect(nameInput.props.placeholder).toEqual('First name*');
    expect(surnameInput.props.placeholder).toEqual('Last name*');
  })
  
});