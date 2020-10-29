import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/footer.css';
const Footer = () => {
    return ( 
        <div>
            <h2>Stopka</h2>
            <Route path="/" exact render={(props) => {
                console.log(props);
                return(
                    <p>Jesteś na <span>stronie głównej</span></p>
                )
            }}/>
            <Route path="/:page" exact render={(props) => {
                console.log(props);
                return(
                    <p>Jesteś na <span>{props.match.params.page}</span></p>
                )
            }}/>
            <Route path="/:page/:idProduct" exact render={(props) => {
                console.log(props);
                return(
                    <p> na podstronie<span>{props.match.url}</span></p>
                )
            }}/>     
        </div>
     );
}
 
export default Footer 