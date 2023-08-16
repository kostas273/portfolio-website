'use client';

import Skill from './Skill';
import angular from 'public/assets/skills/angular.svg';
import appium from 'public/assets/skills/appium.svg';
import bash from 'public/assets/skills/bash.svg';
import bootstrap from 'public/assets/skills/bootstrap.svg';
import docker from 'public/assets/skills/docker.svg';
import express from 'public/assets/skills/express.svg';
import git from 'public/assets/skills/git.svg';
import github from 'public/assets/skills/github.svg';
import gcp from 'public/assets/skills/googlecloud.svg';
import jasmine from 'public/assets/skills/jasmine.svg';
import java from 'public/assets/skills/java.svg';
import javascript from 'public/assets/skills/javascript.svg';
import jenkins from 'public/assets/skills/jenkins.svg';
import jest from 'public/assets/skills/jest.svg';
import kubernetes from 'public/assets/skills/kubernetes.svg';
import mongo from 'public/assets/skills/mongo.svg';
import nextjs from 'public/assets/skills/nextjs.svg';
import nodejs from 'public/assets/skills/nodejs.svg';
import playwright from 'public/assets/skills/playwright.svg';
import react from 'public/assets/skills/react.svg';
import redux from 'public/assets/skills/redux.svg';
import selenium from 'public/assets/skills/selenium.svg';
import sql from 'public/assets/skills/sql.svg';
import tailwindcss from 'public/assets/skills/tailwindcss.svg';
import typescript from 'public/assets/skills/typescript.svg';
import { useContext, useEffect } from 'react';
import { SkillsContext } from './skillsContext';

export default function SkillsGrid() {

  const { state } = useContext(SkillsContext);

  useEffect(() => {
    let timeout: number;
    const onResize = () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = 0;
      } else {
        document.body.classList.add('stop-transitions');
      }

      timeout = window.setTimeout(() => {
        document.body.classList.remove('stop-transitions');
        timeout = 0;
      }, 100);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return (
    <div className={`skills-grid flex flex-wrap md:shrink-0 gap-[calc(var(--grid-width)/6.5)] w-[--grid-width] min-w-[--grid-width] aspect-square [mask-image:radial-gradient(#000,transparent,transparent,transparent,transparent)] [mask-position:center] [mask-size:100%_100%] ${state.transitionsStarted ? '[rotate:-720deg] overflow-visible md:gap-3 [transition:width_var(--half-dur)_var(--half-dur)_ease-in-out,rotate_var(--full-dur),gap_var(--half-dur)_var(--half-dur)_ease-in-out] animate-[fade-mask_calc(var(--full-dur)/1.5)_cubic-bezier(1,0,1,0)_forwards]' : ''}`}>
      <Skill src={javascript} alt="JavaScript" shiftTooltip className='[translate:180%_180%]' />
      <Skill src={typescript} alt="TypeScript" className='[translate:90%_45%]' />
      <Skill src={nodejs} alt="Nodejs" />
      <Skill src={bash} alt="Bash" className='[translate:-90%_45%]' />
      <Skill src={java} alt="Java" className='[translate:-180%_180%]' />

      <Skill src={selenium} alt="Selenium" shiftTooltip className='[translate:45%_90%]' />
      <Skill src={appium} alt="Appium" className='[translate:90%_90%]' />
      <Skill src={jest} alt="Jest" />
      <Skill src={jasmine} alt="Jasmine" className='[translate:-90%_90%]' />
      <Skill src={playwright} alt="Playwright" className='[translate:-45%_90%]' />

      <Skill src={bootstrap} shiftTooltip alt="Bootstrap" />
      <Skill src={tailwindcss} alt="Tailwind" />
      <Skill src={react} alt="React" className="[scale:150%_150%] [rotate:720deg]" />
      <Skill src={redux} alt="Redux" />
      <Skill src={angular} alt="Angular" />

      <Skill src={nextjs} alt="NextJS" shiftTooltip className='[translate:45%_-90%]' />
      <Skill src={express} alt="Express" className='[translate:90%_-90%]' />
      <Skill src={sql} alt="SQL" />
      <Skill src={mongo} alt="MongoDB" className='[translate:-90%_-90%]' />
      <Skill src={gcp} alt="Google Cloud" className='[translate:-45%_-90%]' />

      <Skill src={docker} alt="Docker" shiftTooltip className='[translate:180%_-180%]' />
      <Skill src={kubernetes} alt="Kubernetes" className='[translate:90%_-45%]' />
      <Skill src={jenkins} alt="Jenkins" />
      <Skill src={git} alt="Git" className='[translate:-90%_-45%]' />
      <Skill src={github} alt="GitHub" className='[translate:-180%_-180%]' />
    </div>
  );
}
