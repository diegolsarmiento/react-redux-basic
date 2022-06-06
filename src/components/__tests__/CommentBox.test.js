import {render, fireEvent} from '@testing-library/react'
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let setup;
beforeEach(()=> {
    setup = () => {
        const utils = render(
          <Root>
                <CommentBox />
          </Root>
        );
        const comment = utils.getByLabelText('text-comment');
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