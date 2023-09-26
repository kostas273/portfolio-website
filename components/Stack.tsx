'use client';

import { useEffect, useState } from 'react';
import SkillsSection from './SkillsSection/SkillsSection';
import TimelineSection from './TimelineSection/TimelineSection';
import Main from './MainSection/Main';
import { SkillsContextProvider } from './SkillsSection/skillsContext';
import ScrollIndicator from './Shared/ScrollIndicator';

export default function TransitionStack() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let next = true;

    const onWheel = (event: WheelEvent) => {
      if (!event.deltaY || !next) return;
      next = false;
      setTimeout(() => next = true, 700);
      if (event.deltaY > 0) {
        setCurrent(prev => Math.min(2, prev + 1));
      } else {
        setCurrent(prev => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('wheel', onWheel);

    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, []);

  useEffect(() => {
    let next = true;
    let startScreenY = 0;

    const onTouchStart = (e: TouchEvent) => {
      startScreenY = e.touches[0].screenY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!next) return;
      next = false;
      setTimeout(() => next = true, 700);

      if (e.touches[0].screenY < startScreenY) {
        setCurrent(prev => Math.min(2, prev + 1));
      } else {

        setCurrent(prev => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <div className="h-full grid auto-rows-[100%] overflow-x-visible">
      <Main active={current === 0}>
        <ScrollIndicator onClick={() => setCurrent(1)} />
      </Main>
      <SkillsContextProvider>
        <SkillsSection active={current === 1}>
          <ScrollIndicator onClick={() => setCurrent(2)} />
        </SkillsSection>
      </SkillsContextProvider>
      <TimelineSection active={current === 2} />
    </div>
  );
}
