import { MouseEventHandler } from 'react';

export default function ChevronStart({ onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onClick} className="text-indigo-600 inline-block align-middle p-[2px] rounded-full border-[1px] border-indigo-400">
      <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 17.75C9.90147 17.7505 9.80383 17.7313 9.71282 17.6935C9.62181 17.6557 9.53926 17.6001 9.47001 17.53C9.32956 17.3894 9.25067 17.1988 9.25067 17C9.25067 16.8013 9.32956 16.6107 9.47001 16.47L13.94 12L9.47001 7.53003C9.33753 7.38785 9.26541 7.19981 9.26884 7.00551C9.27226 6.81121 9.35098 6.62582 9.48839 6.48841C9.6258 6.35099 9.81119 6.27228 10.0055 6.26885C10.1998 6.26543 10.3878 6.33755 10.53 6.47003L15.53 11.47C15.6705 11.6107 15.7494 11.8013 15.7494 12C15.7494 12.1988 15.6705 12.3894 15.53 12.53L10.53 17.53C10.4608 17.6001 10.3782 17.6557 10.2872 17.6935C10.1962 17.7313 10.0986 17.7505 10 17.75Z" fill="currentColor" />
      </svg>
    </button>
  );
}

