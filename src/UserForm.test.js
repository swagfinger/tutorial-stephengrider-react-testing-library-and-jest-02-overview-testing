import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  //render component
  render(<UserForm />);
  //manipulate the component/find an element
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  //make an assertion - expect it to do what its supposed to
  //function() - matcher()
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', () => {
  //NOT BEST IMPLEMENTATION
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };

  //render the component
  render(<UserForm onUserAdd={callback} />); //callback is onUserAdd() pushes object {name, email}
  //find 2 inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');
  //simulate typing in a name
  user.click(nameInput);
  user.keyboard('jane');
  //simulate typing in an email
  user.click(emailInput);
  user.keyboard('jane@jane.com');

  //find the button
  const button = screen.getByRole('button');

  //simulate clicking the button
  user.click(button);

  //assertion to make sure 'onUserAdd' gets called with email
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' });
});
