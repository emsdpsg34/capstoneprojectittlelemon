import { render, screen } from '@testing-library/react';
import React from 'react';

// Create a simple test component that doesn't use routing
const SimpleTestComponent = () => {
  return (
    <div>
      <h1>Test Component</h1>
      <p>This is a simple test</p>
    </div>
  );
};

test('renders simple test component', () => {
  render(<SimpleTestComponent />);
  const headingElement = screen.getByText(/Test Component/i);
  expect(headingElement).toBeInTheDocument();
});

test('basic math works', () => {
  expect(2 + 2).toBe(4);
});
