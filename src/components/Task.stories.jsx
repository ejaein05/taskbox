
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

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = {
  args: {
    task: {
      ...Default.args.task,
      title: longTitleString,
    },
  },
};