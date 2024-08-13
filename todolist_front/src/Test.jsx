import React, { useEffect } from 'react';

function Test(props) {
    useEffect(() => {
        console.log("aaa");
    });
    console.log("bbb");
    return (
        <div>
            
        </div>
    );
}

export default Test;