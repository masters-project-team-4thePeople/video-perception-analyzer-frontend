import { checkValidation } from './screens/SignUp';

test('checkValidation correctly sets whitespace state', () => {
  const mockSetWhitespace = jest.fn();
  const event = { target: { value: 'password with whitespace ' } };
  
  checkValidation(event, mockSetWhitespace);
  
  expect(mockSetWhitespace).toHaveBeenCalledWith(true);
});
