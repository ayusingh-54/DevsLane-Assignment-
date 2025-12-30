import {  memo, type FC } from 'react';
import { useDispatch } from 'react-redux';
import { happybuttonClicked } from './action';

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = (props) => {   
    const dispatch = useDispatch();
    function increment() {
    dispatch(happybuttonClicked);
}

    return (
        <div className="p-4">
            <h3>Are You Happy </h3>
            <button onClick={increment} className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600">Yes</button>
        </div>
    );
}
export default memo(HappyIncrementor);