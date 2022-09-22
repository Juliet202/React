import {useState} from 'react';

const Changedstate = () => {
    let [changed, setChanged] = useState ('');
    let cambio = ()=>{
        console.log('cambiando');
        setChanged (changed = 'from changed state')
    }

    return (
        <div>
            <h1>Hello my friend {changed}!</h1>
            <button onClick = {cambio}>Click me</button>
        </div>
    );
};

export default Changedstate;