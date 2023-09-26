import Image from 'next/image';
import Link from 'next/link';
import envelope from '../../public/assets/contact/envelope.svg';
import github from '../../public/assets/contact/github.svg';
import linkedin from '../../public/assets/contact/linkedin.svg';
import kostas from '../../public/assets/kostas.jpg';
import ScrollIndicator from '../Shared/ScrollIndicator';

export default function Main({ active }: { active: boolean }) {
  return (
    <div className={`[grid-area:1/1/2/2] relative flex justify-center items-center ${active ?
      'z-10 opacity-100 [transition:opacity_750ms_250ms_ease-in,transform_1000ms_ease-out]' :
      'opacity-0 -translate-y-full [transition:opacity_500ms_ease-out,transform_1000ms_ease-in]'}`}
    >
      <div id="main" className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        <div className="relative border-2 border-double border-transparent rounded-full md:rounded-2xl bg-origin-border [background-clip:content-box,border-box] [background-image:linear-gradient(#000,#000),linear-gradient(90deg,rgba(99,102,241,1)_0%,rgba(124,58,237,1)_100%)] shadow-lg w-64 overflow-hidden shrink-0 m-auto">
          <Image priority src={kostas} alt="profile-picture" className='bbbb' />
        </div>
        <div className="md:max-w-[45rem] flex flex-col justify-between text-center md:text-left">
          <div>
            <p className="text-indigo-600 font-medium">LET&apos;S BUILD SOMETHING TOGETHER</p>
            <h3>Konstantinos Politis</h3>
          </div>
          <p className='py-2 md:py-0'>I&apos;m a Software Engineer specializing in Quality Assurance, committed to delivering top-notch software.
            Beyond my expertise in test framework development, I&apos;m driven by a passion for building efficient
            and scalable Web APIs and providing responsive user experiences.
          </p>
          <ul className="flex justify-between max-w-xs w-4/5 m-auto md:m-0">
            <Link href="https://www.linkedin.com/in/kostas-politis-8056791b8" target="_blank">
              <li className="rounded-full shadow-lg shadow-gray-400 p-4">
                <Image priority src={linkedin} alt="LinkedIn Profile" />
              </li>
            </Link>
            <Link href="https://github.com/kostas273?tab=repositories" target="_blank">
              <li className="rounded-full shadow-lg shadow-gray-400 p-4">
                <Image priority src={github} alt="GitHub" />
              </li>
            </Link>
            <Link href="mailto:politisk273@gmail.com">
              <li className="rounded-full shadow-lg shadow-gray-400 p-4">
                <Image priority src={envelope} alt="Send email" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
}
