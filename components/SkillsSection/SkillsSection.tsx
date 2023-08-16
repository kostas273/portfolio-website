'use client';

import { useContext, useEffect } from 'react';
import SkillsGrid from './SkillsGrid';
import { SkillsContext } from './skillsContext';
import SkillsBody from './SkillsBody';

export default function SkillsSection({ active }: { active: boolean }) {

  const { state, dispatch } = useContext(SkillsContext);

  useEffect(() => {
    if (active) dispatch({ type: "SET_TRANSITIONS_STARTED" })
  }, [active, dispatch])

  const onFadeOut = () => {
    if (!state.transitionsFinished && !active) {
      dispatch({ type: "RESET_TRANSITIONS_STATE" });
    }
  }

  return (
    <div
      className={`flex justify-start items-center [grid-area:1/1/2/2] w-full h-full overflow-y-hidden overflow-x-hidden ${active ? 'z-10 [transition:opacity_1000ms_linear]' : 'opacity-0 [transition:opacity_1000ms_linear]'}`}
      onTransitionEnd={onFadeOut}
    >
      <div
        className={`skills-section flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center max-h-full w-full overflow-visible ${state.transitionsStarted ? 'after gap-8 pt-0 md:pl-[calc(50vw-32rem)] transition-[gap,padding-top,padding-left] duration-[--half-dur] delay-[--half-dur]' : 'gap-[calc(50vh-calc(var(--grid-width)/2))] md:gap-[calc(calc(100vw-min(100vmin,1024px))/2)] pt-[calc(50vh-calc(var(--grid-width)/2))] md:pt-0 md:pl-[calc(calc(100vw-min(100vmin,1024px))/2)]'}`}
        onTransitionEnd={() => { dispatch({ type: "SET_TRANSITIONS_FINISHED" }) }}
      >
        <SkillsGrid />
        <SkillsBody />
      </div>
    </div>
  )
}
