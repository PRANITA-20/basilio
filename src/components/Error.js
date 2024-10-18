import { useRouteError } from "react-router-dom";
import Header from './Header';
const Error=()=>{
   const err= useRouteError();
    return (
        <><Header/>
        <div className="error px-24 margin-auto max-width-1320">
            <h2>{err.status}: Page not found!</h2>
        </div>
        </>
    )
}

export default Error;