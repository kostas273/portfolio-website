import ScrollIndicatorArrow from "./ScrollIndicatorArrow";

export default function ScrollIndicator() {
    return (
        <div
            onClick={() => { console.log("click") }}
            className={`absolute bottom-[7%] hidden sm:block`}>
            <ScrollIndicatorArrow animationDelay={0} />
            <ScrollIndicatorArrow animationDelay={0.5} />
            <ScrollIndicatorArrow animationDelay={1} />
        </div>
    );
}