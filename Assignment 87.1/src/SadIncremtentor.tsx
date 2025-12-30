import {  memo, type FC } from 'react';
import HappyIncrementor from './HappyIncrementor';
import { sadbuttonClicked } from './action';
import { useDispatch } from 'react-redux';

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> = (props) => {   
    const dispatch = useDispatch();
    function increment() {
    dispatch(sadbuttonClicked);
}
    return (
        <div className="p-4">
            <h3>Are You Sad </h3>
            <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">Yes</button>
        </div>
    );
}


export default memo(SadIncrementor);