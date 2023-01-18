import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';

test('render one row per user', () => {
  //render the component
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];

  render(<UserList users={users} />);
  // 19. getting help with query
  screen.logTestingPlaygroundURL();

  //find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  //assertion
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {});
