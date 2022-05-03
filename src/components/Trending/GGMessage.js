import React from 'react';
import Delete from "../Delete";

const GGMessage = (props) => {

    return( 
        <div className='ggMessage'>
            <p>Post:{props.contents}
                <br></br><br></br>
               Time: {props.time}</p>

            <a href="/myposts">Review Comments</a>
        </div>     
    )
}

export default GGMessage;