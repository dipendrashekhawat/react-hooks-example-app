import React, { useState, useEffect } from 'react';

function ReactHook(){
    const [count, setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return(
        <div>
            <p>You clicked {count} times</p>
            <button className="Button" onClick={() => setCount(count + 1)}>
                Click Me of Functional Component
            </button>
            <br />
            <p>Hope you will &#10084; this </p>
        </div>
    );
}

export default ReactHook;
