import { render, screen } from '@testing-library/react';
import App from './components/app';

test('renders app component', () => {
  render(<App />);
  const element = screen.getByTitle('parent-container');
  expect(element).toBeInTheDocument();
});
