import React from 'react';
import Consumer from './Consumer'

const OtherComponent = () => {
    return (
        <div>
            <p>This is our OtherComponent</p>
            <p>It is not interested in our Context</p>
                <Consumer />
            <p>This is the end of our OtherComponent</p>
        </div>
    )
}

export default OtherComponent;