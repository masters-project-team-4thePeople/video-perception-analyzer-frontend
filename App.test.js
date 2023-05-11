import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import Login from './screens/Login';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux'; // import Provider
import configureStore from 'redux-mock-store'; // import configureStore from 'redux-mock-store'

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  })});

it('renders correctly', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

const mockStore = configureStore([]); // create a mock store

describe('Login screen', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        isLoading: false,
        error: null,
        user: null
      }
    });
  });

  it('renders correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(getByTestId('login-screen')).toBeDefined();
  });
});

describe('SignUp screen', () => {
  it('should render the email and password input fields', () => {
    const { getByPlaceholderText } = render(<SignUp navigation={{ navigate: jest.fn() }} />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    expect(emailInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();
  });

  it('should navigate to the Home screen when the "Sign up" button is pressed', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<SignUp navigation={{ navigate }} />);

    const signUpButton = getByTestId('signUpButton');
    fireEvent.press(signUpButton);

    expect(navigate).toHaveBeenCalledWith('Home');
  });
});
