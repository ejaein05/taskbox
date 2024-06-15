
import { fn } from "@storybook/test";       //placeholder for when buildng in isolation. allows callback creation 

import Task from './Task';

export const ActionsData = {
  onArchiveTask: fn(),              
  onPinTask: fn(),
};

export default {                        
  component: Task,
  title: 'Task',                        //how component is grouped/categorized in Storybook sidebar
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,                    //addtl info reqd by story but not rendered in Storybook
  args: {                   //action dependencies
    ...ActionsData,
  },
};

export const Default = {            //default state
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {                 //action
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {               //action
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};