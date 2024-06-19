import InboxScreen from "./InboxScreen";
import store from '../lib/store';
//mocks remote msw API calls
import { http, HttpResponse } from 'msw';
import { MockedState } from './Tasklist.stories';
import { Provider } from 'react-redux';

//includes code to run stories during dev. provides pause, resume, rewind, and step through each interaction.
import {
    fireEvent,
    waitFor,
    within, 
    waitForElementToBeRemoved
} from '@storybook/test';


export default {
    component: InboxScreen,
    title: 'InboxScreen',
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
    tags: ['autodocs'],
};
export const Default = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
                    return HttpResponse.json(MockedState.tasks);
                }),
            ],
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        //waits for component to transition from loading state
        await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
        //waits for componet to be udpated based on the store
        await waitFor(async () => {
            //simulate pinning first task
            await fireEvent.click(canvas.getByLabelText('pinTask-1'));
            //simulates pinning third task
            await fireEvent.click(canvas.getByLabelText('pinTask-3'));
        });
    },
};
export const Error = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
                    return new HttpResponse(null, {
                        status: 403,
                    });
                }),
            ],
        },
    },
};