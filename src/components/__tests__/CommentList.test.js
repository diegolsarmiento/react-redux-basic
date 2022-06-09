import React from 'react';
import { render } from '@testing-library/react'

import CommentList from 'components/CommentList';
import Root from 'Root';

let setup;
beforeEach(() => {
    const initialState = {
        comments: ['Comment 1, Comment 2']
    };
    setup = render(<Root initialState={initialState}><CommentList /></Root>);
})

it ('CommentList Test', () => {
    const comment = setup.getByLabelText('comment-list');
    expect(comment).toHaveTextContent('Comment 1');
});