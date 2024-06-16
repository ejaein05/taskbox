import Tasklist from './Tasklist';

import * as TaskStories from './Task.stories';

export default {
    component: Tasklist,
    title: 'TaskList',
    decorators: [(story) => <div style={{ margin: '3rem' }}>{story()}</div>],
    tags: ['autodocs'],
    args: {
        ...TaskStories.ActionsData,
    },
};

export const Default = {
    args: {
        //data inherited from Task.stories.jsx
        tasks: [
            { ...TaskStories.Default.args.task, id: '1', title: 'Task 1'},
            { ...TaskStories.Default.args.task, id: '1', title: 'Task 2'},
            { ...TaskStories.Default.args.task, id: '1', title: 'Task 3'},
            { ...TaskStories.Default.args.task, id: '1', title: 'Task 4'},
            { ...TaskStories.Default.args.task, id: '1', title: 'Task 5'},
            { ...TaskStories.Default.args.task, id: '1', title: 'Task 6'},
        ],
    },
};

export const WithPinnedTasks = {
    args: {
        tasks: [
            ...Default.args.tasks.slice(0,5),
            { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
        ],
    },
};

export const Loading = {
    args: {
        tasks: [],
        loading: true,
    },
};

export const Empty = {
    args: {
        ...Loading.args,
        loading: false,
    },
}