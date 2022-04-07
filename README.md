# Simple TypeScript Class For React State Updates



### Create Data Set As StateService

```typescript
import { StateService } from './state-service';

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
```


### Assign Data To React State

```tsx
// assign demo data as react state
const [demoData, setDemoData] = React.useState<DemoData>(new DemoData());

// check if set state callback is given
if (!demoData.setStateCallback) {
    // assign set state callback if not given
    demoData.initStateCallback(setDemoData);
}
```


### Demo Function For Data Changes With State Update

```tsx

setText = (text: string) => {
    this.text = text;
    this.updateState();
}

```


### Usement in HTML Markup

```tsx
<>
    <button onClick={()=>{demoData.setText('Clicked inside Component')}}>
        Demo Button
    </button>
    <div>{demoData.text}</div>
</>
    
```


### Demo Function For Data Changes With State Update, From Components

```tsx
// demo function for trigger state update from component
const setTextFromComponent = (text:string) =>{
    demoData.text = text;
    demoData.updateState();
}
```


