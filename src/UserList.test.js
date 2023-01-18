import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';

test('render one row per user', () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];

  //render the component
  const { container } = render(<UserList users={users} />);
  // 19. getting help with query
  // eslint-disable-next-line
  //screen.logTestingPlaygroundURL();

  //find all the rows in the table
  //20. fallback #1
  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  //21. fallback #2
  // eslint-disable-next-line
  // const rows = container.querySelectorAll('tbody tr');
  //assertion
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  //render the component
  render(<UserList users={users} />);
  // 19. getting help with query
  // eslint-disable-next-line
  screen.logTestingPlaygroundURL();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name }); //that has text context (name) of 'user.name'
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
