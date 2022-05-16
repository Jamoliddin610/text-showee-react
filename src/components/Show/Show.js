import React from 'react';
function Show(props){
    return (
        <div>
            {props.inputLenght > 5 ? 
            <p>Text long enough</p>:
            <p>Text too short</p>}
        </div>
    );
}

export default Show;
