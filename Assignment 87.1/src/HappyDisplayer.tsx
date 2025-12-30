import { memo } from "react";
import { HappyCounterSelector } from "./Selector";
import { useSelector } from "react-redux";

const HappyDisplayer = () => {
    const happycounter = useSelector(HappyCounterSelector); 
    return (
        <div className="bg-orange-700 px-8 py-4">
            <h2>You were happy {happycounter} times</h2>
        </div>
    );
}
export default memo(HappyDisplayer);