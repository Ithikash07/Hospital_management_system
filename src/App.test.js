import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hospital management system', () => {
  render(<App />);
  // Just check that the app renders without crashing
  expect(document.body).toBeInTheDocument();
});
