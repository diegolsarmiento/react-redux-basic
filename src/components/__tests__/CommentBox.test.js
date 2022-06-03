import {render, fireEvent} from '@testing-library/react'
import CommentBox from 'components/CommentBox';

let setup;
beforeEach(()=> {
    setup = () => {
        const utils = render(<CommentBox />)
        const comment = utils.getByLabelText('text-comment')
        return {
          comment,
          ...utils,
        }
      }
})

test('Updating textarea for Unit Tests', () => {
  const {comment} = setup();
  fireEvent.change(comment, {target: {value: '23'}});
  expect(comment.value).toBe('23');
})