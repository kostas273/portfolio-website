'use client';

import TimelineHeader from './TimelineHeader';
import TimelineStepper from './TimelineStepper';
import TimelineBody from './TimelineBody';
import { timelineData } from './timelineData';
import { useState } from 'react';
import { Step } from './step';

export default function TimelineSection({ active }: { active: boolean }) {

  const [steps, setSteps] = useState<Step[]>(timelineData.map((timelineDataPiece, index) => ({
    job: timelineDataPiece.job,
    company: timelineDataPiece.company,
    date: timelineDataPiece.date,
    paragraphs: [...timelineDataPiece.paragraphs],
    active: !index
  })));

  return (
    <div className={`[grid-area:1/1/2/2] flex justify-center items-center ${active ?
      'z-10 opacity-100 [transition:opacity_750ms_250ms_ease-in,transform_1000ms_ease-out]' :
      'opacity-0 translate-y-full [transition:opacity_500ms_ease-out,transform_1000ms_ease-in]'}`}
    >
      <div className={'max-w-5xl w-full grid justify-center items-start m-auto'}>
        <TimelineHeader />
        <TimelineStepper steps={steps} setSteps={setSteps} />
        <TimelineBody steps={steps} />
      </div>
    </ div >
  );
}
