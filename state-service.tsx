export class StateService {

    // react set state callback
    public setStateCallback?: any

    public initStateCallback = (setStateCallback: any) => {
        // check if callback if set
        if (!this.setStateCallback) {
            // wait till client browser is ready
            setTimeout(() => {
                // assign callback
                this.setStateCallback = setStateCallback;
                // update state
                this.updateState();
            }, 0);
        }
    }

    public updateState = () => {
        // update states for react with cloning and assigning "this" own class
        this.recreateStateService(this);
    };

    private recreateStateService = (stateService: StateService): StateService => {
        // create new object as StateService
        const newStateService: StateService = {} as StateService;
        // assign own attributes to new StateService
        Object.assign(newStateService, this);
        // switch given StateService to new StateService
        stateService = newStateService;
        // trigger set state callback
        if (this.setStateCallback) {
            this.setStateCallback(stateService)
        }
        // return StateService
        return stateService;
    }

    /*
     * note, that functions are only available inside react components, when declared as attribute.
     * class functions them self, are not available inside the react state object
     */

}
