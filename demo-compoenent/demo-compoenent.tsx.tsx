import React from 'react';
import { DemoData } from './demo.data';
import ChildComponent from './child-component/child-compoenent.tsx';

type ChildProps = {
};
const DemoComponent: React.FC<ChildProps> = ({}) => {

    // assign demo data as react state
    const [demoData, setDemoData] = React.useState<DemoData>(new DemoData());

    // check if set state callback is given
    if (!demoData.setStateCallback) {
        // assign set state callback if not given
        demoData.initStateCallback(setDemoData);
    }

    // demo function for trigger state update from component
    const setTextFromComponent = (text:string) =>{
        demoData.text = text;
        demoData.updateState();
    }

    // render component
    return (
        <>
            <button onClick={()=>{demoData.setText('Clicked inside DemoComponent (Demo 1)')}}>
                Demo 1 (from Parent)
            </button>
            <button onClick={()=>{setTextFromComponent('Clicked inside DemoComponent (Demo 2)')}}>
                Demo 2 (from Parent Component)
            </button>
            <ChildComponent></ChildComponent>
        </>
    )

}

export default DemoComponent;
