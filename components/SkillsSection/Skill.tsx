'use client';

import Image from 'next/image';
import { useContext, useState } from 'react';
import { SkillsContext } from './skillsContext';

export default function Skill({ src, alt, shiftTooltip, className }: { src: any, alt: string, shiftTooltip?: boolean, className?: string }) {

  const { state } = useContext(SkillsContext);
  const [tooltip, useTooltip] = useState(false);

  return (
    <div
      className={`skill group relative w-[calc(var(--grid-width)/13)] aspect-square hover:z-30 ${className} ${state.transitionsStarted ? 'md:w-[2.6rem] [rotate:720deg] [scale:150%] md:[scale:unset] md:[translate:0_0] [transition:width_var(--half-dur)_var(--half-dur)_ease-in-out,height_var(--half-dur)_var(--half-dur)_ease-in-out,rotate_var(--full-dur),scale_var(--half-dur)_var(--half-dur)_ease-in-out,translate_var(--half-dur)_var(--half-dur)_cubic-bezier(0.40,0,0.8,1)]' : 'overflow-hidden'}`}
      onTransitionEnd={() => { useTooltip(true) }}>
      <Image priority src={src} alt={alt} className='rounded-md md:rounded-lg' />
      {tooltip && <div
        className={`absolute hidden origin-top-left md:origin-center [scale:65%] md:[scale:unset] group-hover:block top-[calc(100%_+_10px)] md:top-auto md:bottom-[calc(100%_+_10px)] bg-indigo-100 shadow-xl px-6 py-1 rounded-lg text-center ${shiftTooltip ? '-translate-x-1/2 md:translate-x-0 xl:-translate-x-1/2 left-1/2 md:left-0 xl:left-1/2' : '-translate-x-1/2 left-1/2'}`}
      >
        {alt}
        <div className={`absolute ${shiftTooltip ? 'left-1/2 md:left-[calc(var(--grid-width)/13)] xl:left-1/2 -translate-x-1/2 md:-translate-x-1/3 xl:-translate-x-1/2 ' : '-translate-x-1/2 left-1/2'} bottom-full md:bottom-auto md:top-full border-solid border-x-8 border-x-transparent border-b-8 md:border-b-0 md:border-t-8 border-y-indigo-100 shadow-xl`}></div>
      </div>}
    </div>
  );
}
