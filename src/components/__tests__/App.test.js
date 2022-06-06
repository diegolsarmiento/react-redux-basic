import { cleanup, render, screen } from '@testing-library/react';
import App from 'components/App';
import Root from 'Root';

beforeEach(() => {
  render(
    <Root>
      <App />
    </Root>
  );
})

afterEach(() => {
  cleanup;
})

test('Check Box', () => {
  const commentBox = screen.getByRole('box');
  expect(commentBox).toBeInTheDocument();
});

test('Check List', () => {
  const commentBox = screen.getByRole('list');
  expect(commentBox).toBeInTheDocument();
});
