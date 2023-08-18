export default function SkillsBody() {
  return (
    <div className='flex flex-col justify-between md:h-[--grid-width] md:w-[45rem] md:min-w-[min(calc(100vw-var(--grid-width)-8rem-calc(var(--px-body)*2)),45rem)] md:overflow-y-hidden'>
      <div>
        <p className="text-indigo-600 font-medium">SKILLS</p>
        <h4>What I can do</h4>
      </div>
      <p className="py-2 md:py-0">
        As a Junior Software Engineer, I bring a diverse skill set and a strong passion for crafting meaningful software solutions. I have gained valuable hands-on experience in building robust end-to-end test automation frameworks, Web APIs and automating tasks to streamline processes. I also enjoy the creative process of building user-friendly interfaces that seamlessly adapt to various devices and screen sizes, enhancing the overall user experience.
      </p>
      <a className='underline cursor-pointer' href='https://github.com/kostas273/portfolio-website.git' target="_blank">Check out the source code</a>
    </div>
  )
}
