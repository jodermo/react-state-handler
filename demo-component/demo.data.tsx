import { StateService } from '../state-service';

export class DemoData extends StateService {

    // declare parameters for react state

    text: string = 'Initial Demo Text';

    setText = (text: string) => {
        this.text = text;
        this.updateState();
    }


    /*
     * note, that functions are only available inside react components, when declared as attribute.
     * class functions them self, are not available inside the react state object
    */
    
    doWorkInReactState = () =>{
        // this function is available via react state
    }

    doesNotWorkInReactState() {
        // this function is not available via react state
    }

}
