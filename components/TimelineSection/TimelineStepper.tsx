'use client';

import { Dispatch, SetStateAction, Fragment, useRef } from 'react';
import ChevronStart from './ChevronStart';
import ChevronEnd from './ChevronEnd';
import StepperLine from './StepperLine';
import { Step } from './step';

interface StepperProps {
    steps: Step[],
    setSteps: Dispatch<SetStateAction<Step[]>>
}

export default function TimelineStepper({ steps, setSteps }: StepperProps) {
  const ref = useRef<null | HTMLDivElement>(null);
  const stepRefs = useRef<(null | HTMLDivElement)[]>([]);

  const scrollRight = (currentIndex: number) => {
    const next = stepRefs.current[currentIndex + 1];
    const parent = ref.current;

    if (parent && next) {
      const nextRect = next.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      if (nextRect.right > parentRect.right - parentRect.width * 12 / 100) {
        parent.scrollBy({
          behavior: 'smooth',
          left: parent.offsetWidth
        });
      }
    }
  };

  const scrollLeft = (currentIndex: number) => {
    const prev = stepRefs.current[currentIndex - 1];
    const parent = ref.current;

    if (parent && prev) {
      const prevRect = prev.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      if (prevRect.left < parentRect.left + parentRect.width * 12 / 100) {
        parent.scrollBy({
          behavior: 'smooth',
          left: -parent.offsetWidth
        });
      }
    }
  };

  const handleNextClick = () => {
    const lastActive = steps.findLastIndex(step => step.active);
    if (lastActive < steps.length - 1) {
      scrollRight(lastActive);
      setSteps(steps.map((step, i) => ({ ...step, active: i <= lastActive + 1 })));
    }
  };

  const handleBackClick = () => {
    const lastActive = steps.findLastIndex(step => step.active);
    if (lastActive) {
      scrollLeft(lastActive);
      lastActive && setSteps(steps.map((step, i) => ({ ...step, active: i < lastActive })));
    }
  };

  const handleStepClick = (index: number) => {
    const currentIndex = steps.findLastIndex(step => step.active);
    if (index === currentIndex) {
      return;
    } else if (index > currentIndex) {
      scrollRight(index - 1);
    } else if (index < currentIndex) {
      scrollLeft(index + 1);
    }

    setSteps(steps.map((step, i) => ({ ...step, active: index >= i })));
  };

  return (
    <div className="w-full flex justify-between items-center my-4">
      <ChevronStart onClick={handleBackClick} />
      <div ref={ref} className="flex justify-between items-center grow py-[18px] overflow-hidden">
        <StepperLine width={12} active={true} />
        {
          steps.map((step, i) => {
            const monthsPassed = i &&
                            12 * (step.date.getFullYear() - steps[i - 1].date.getFullYear()) +
                            step.date.getMonth() - steps[i - 1].date.getMonth();

            return <Fragment key={i}>
              <StepperLine width={i && monthsPassed} active={step.active} />
              <div
                ref={(stepRef: HTMLDivElement) => stepRefs.current[i] = stepRef}
                className={`relative inline-block ${step.active ? 'bg-indigo-400' : 'bg-slate-300'} h-[10px] w-[10px] rounded-full cursor-pointer shrink-0 z-20`}
                onClick={() => handleStepClick(i)}
              >
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[100%] text-[14px] whitespace-nowrap">
                  {step.date.toLocaleString('default', { year: 'numeric', month: 'short' }).toUpperCase()}
                </div>
              </div>
            </Fragment>;
          })
        }
        <StepperLine width={12} active={steps[steps.length - 1].active} />
      </div>
      <ChevronEnd onClick={handleNextClick} />
    </div>
  );
}
