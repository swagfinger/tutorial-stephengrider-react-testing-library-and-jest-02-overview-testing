import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
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
  const mock = jest.fn();

  //render the component
  render(<UserForm onUserAdd={mock} />); //callback is onUserAdd() pushes object {name, email}
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  }); //i ignores case sensative

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

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
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});
