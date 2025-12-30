import { memo } from "react";
import { useSelector } from "react-redux";
import { SadCounterSelector } from "./Selector";

const SadDisplayer = () => {
    const sadCountr = useSelector(SadCounterSelector);
    return (
        <div className="bg-blue-700 px-8 py-4">
            <h2>You were sad {sadCountr} times</h2>
        </div>
    );
}
export default memo(SadDisplayer);