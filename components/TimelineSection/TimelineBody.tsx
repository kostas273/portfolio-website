import { Step } from './step';

export default function TimelineBody({ steps }: { steps: Step[] }) {
  const active = steps.findLastIndex(step => step.active);
  return (
    <>
      {
        steps.map((step, i) =>
          <div key={i} className={`text-sm [grid-area:3/1/4/1] transition-[opacity,transform] duration-700 ${i === active ? 'z-10' : 'opacity-0 translate-y-1/3'}`} >
            <h6 className="text-indigo-600 font-semibold">{step.job}</h6>
            <h5 className="mb-2">{step.company}</h5>
            {
              step.paragraphs?.map((par, j) => <p key={j} className="mb-4 text-justify">{par}</p>)
            }
          </div>
        )
      }
    </>
  );
}
