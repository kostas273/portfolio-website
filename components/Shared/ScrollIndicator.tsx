import { MouseEventHandler } from "react";
import ScrollIndicatorArrow from "./ScrollIndicatorArrow";

export default function ScrollIndicator({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button
            onClick={onClick}
            className={`absolute bottom-[7%] hidden sm:block`}>
            <ScrollIndicatorArrow animationDelay={0} />
            <ScrollIndicatorArrow animationDelay={0.5} />
            <ScrollIndicatorArrow animationDelay={1} />
        </button>
    );
}