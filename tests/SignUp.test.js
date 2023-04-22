import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Signup from './screens/SignUp';

describe('SignUp', () => {
  it('should render the SignUp component', () => {
    const { getByTestId } = render(<SignUp />);
    const signUpComponent = getByTestId('sign-up');
    expect(signUpComponent).toBeDefined();
  });

  it('should show validation message when passwords do not match', async () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<SignUp />);
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const signUpButton = getByTestId('sign-up-button');

    fireEvent.changeText(passwordInput, 'password');
    fireEvent.changeText(confirmPasswordInput, 'wrong_password');
    fireEvent.press(signUpButton);

    const validationMessage = await waitFor(() => getByText('Passwords do not match.'));
    expect(validationMessage).toBeDefined();
  });

  it('should show alert when the form is incomplete', async () => {
    const { getByTestId, getByText } = render(<SignUp />);
    const signUpButton = getByTestId('sign-up-button');

    fireEvent.press(signUpButton);

    const alert = await waitFor(() => getByText('Please fill the complete form'));
    expect(alert).toBeDefined();
  });
  
  // You can add more tests here to cover other functionality in the SignUp component
});




