import { render, screen } from '@testing-library/react';
import App from 'components/App';

beforeEach(() => {
  render(<App />);
})

test('Check Box', () => {
  const commentBox = screen.getByRole('box');
  expect(commentBox).toBeInTheDocument();
});

test('Check List', () => {
  const commentBox = screen.getByRole('list');
  expect(commentBox).toBeInTheDocument();
});
