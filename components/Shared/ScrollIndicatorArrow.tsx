export default function ScrollIndicatorArrow({ animationDelay }: { animationDelay: number }) {
  return (
    <span className={`block md:w-[30px] md:h-[30px] border-b-2 border-l-2 [rotate:-45deg] md:-my-[12px] border-indigo-400 animate-pulse`}
      style={{ animationDelay: `${animationDelay}s` }}
    ></span>
  );
}
