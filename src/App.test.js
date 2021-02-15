import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

clientId = 810397336836-9ttlt7hpgvtq7j175n5lcvt4mnsbq3ku.apps.googleusercontent.com
