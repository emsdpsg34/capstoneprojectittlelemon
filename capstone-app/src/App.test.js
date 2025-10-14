import { render, screen } from '@testing-library/react';
import App from './App';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  Navigate: ({ to }) => <div data-testid="navigate" data-to={to} />,
  Route: ({ children, path }) => <div data-testid="route" data-path={path}>{children}</div>,
  Routes: ({ children }) => <div data-testid="routes">{children}</div>,
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
}));

test('renders Little Lemon app', () => {
  render(<App />);
  // Check if the navigation is rendered
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});

test('renders main content area', () => {
  render(<App />);
  // Check if the main content area is rendered
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
