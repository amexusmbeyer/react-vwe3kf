import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Scheduler, TimelineView } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './events-utc';
import { Day } from '@progress/kendo-date-math';

const App = () => {
  return (
    <Scheduler data={sampleData} defaultDate={displayDate}>
      <TimelineView numberOfDays={14} slotDuration="1440" />
    </Scheduler>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
