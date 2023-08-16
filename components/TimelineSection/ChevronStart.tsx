import { MouseEventHandler } from 'react';

export default function ChevronStart({ onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onClick} className="text-indigo-600 inline-block align-middle p-[2px] rounded-full border-[1px] border-indigo-400">
      <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 17.75C13.9015 17.7505 13.8038 17.7313 13.7128 17.6935C13.6218 17.6557 13.5392 17.6001 13.47 17.53L8.47 12.53C8.32955 12.3894 8.25066 12.1988 8.25066 12C8.25066 11.8013 8.32955 11.6107 8.47 11.47L13.47 6.47003C13.6122 6.33755 13.8002 6.26543 13.9945 6.26885C14.1888 6.27228 14.3742 6.35099 14.5116 6.48841C14.649 6.62582 14.7277 6.81121 14.7312 7.00551C14.7346 7.19981 14.6625 7.38785 14.53 7.53003L10.06 12L14.53 16.47C14.6704 16.6107 14.7493 16.8013 14.7493 17C14.7493 17.1988 14.6704 17.3894 14.53 17.53C14.4608 17.6001 14.3782 17.6557 14.2872 17.6935C14.1962 17.7313 14.0985 17.7505 14 17.75Z" fill="currentColor" />
      </svg>
    </button>
  );
}

