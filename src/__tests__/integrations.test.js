import { cleanup, render, screen, fireEvent, act, within } from '@testing-library/react';
import App from 'components/App';
import Root from 'Root';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


let mock;

beforeEach(() => {
    render(
      <Root>
        <App />
      </Root>
    );
    mock = new MockAdapter(axios);  
})

afterEach(() => {
    cleanup;
    mock.reset();
})

it('', async () => {
    const formApp = screen.getByLabelText('async-button');
    expect(formApp).toBeInTheDocument();

    const comments = [ {name: 'Pedro'},  {name: 'Maria'}, {name: 'Luis'}];

    const result = mock.onGet('http://jsonplaceholder.typicode.com/comments').reply(200, comments);
    await act( async () => fireEvent.click(formApp));
    const { getByText } = within(screen.queryAllByLabelText('comment-list')[0]);
    expect(getByText('Pedro')).toBeInTheDocument();

})


