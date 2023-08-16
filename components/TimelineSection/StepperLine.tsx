export default function StepperLine({ width, active }: { width: number, active: boolean }) {
  return <div style={{ width: `${width}%`, minWidth: `${width && 60}px` }}
    className={`${width && 'grow'} inline-block h-[2px] m-auto shrink-0 w-auto ${active ? 'bg-indigo-400' : 'bg-slate-300'}`}
  />;
}
