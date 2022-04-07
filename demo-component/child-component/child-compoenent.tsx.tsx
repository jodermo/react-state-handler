import React from 'react';
import { DemoData } from '../demo.data';

type ChildProps = {
    demoData: DemoData
};
const ChildComponent: React.FC<ChildProps> = ({demoData}) => {

    // render component

    return (
        <>
            <button onClick={()=>{demoData.setText('Clicked inside ChildComponent (Demo 3)')}}>
                Demo 3 (inside Child)
            </button>
            <div>{demoData.text}</div>
        </>
    )

}

export default ChildComponent;
