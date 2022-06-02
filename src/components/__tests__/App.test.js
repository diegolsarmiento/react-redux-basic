import { render, screen } from '@testing-library/react';
import App from 'components/App';

test('Check Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Comment Box/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check Box', () => {
  render(<App />);
  const commentBox = screen.getByRole('box');
  expect(commentBox).toBeInTheDocument();
});

test('Check List', () => {
  render(<App />);
  const commentBox = screen.getByRole('list');
  expect(commentBox).toBeInTheDocument();
});
