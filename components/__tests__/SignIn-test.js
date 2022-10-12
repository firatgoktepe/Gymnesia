import React from 'react';
import SignIn from '../../screens/SignIn';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

afterEach(cleanup);

describe('<SignIn />', () => {
  it('should match the snapshot', () => {
    const rendered = render(<SignIn />).toJSON();
    console.log("Sign in rendered", rendered.children[1]);
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
  
});