import React from 'react';
import ExampleContext from './ExampleContext';

const Consumer = () => {
    return (
        <div>
            <hr />
                <ExampleContext.Consumer>
                    {({data, setData}) => (
                        <div>
                            <p>Data: {data}</p>
                            <input onChange={e => setData(e.target.value)} />
                        </div>
                    )}
                </ExampleContext.Consumer>
            <hr />
        </div>
    )
}

export default Consumer;