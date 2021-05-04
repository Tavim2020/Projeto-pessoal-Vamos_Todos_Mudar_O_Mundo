import React from 'react'
import { GlobalContext } from '../Context/GlobalContext';

const NotFound = () => {

    const { setStatePageNotFound, setFooterGlobal } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        setStatePageNotFound(true);
        setFooterGlobal(true);
    })


    return (
        <div>
            NotFound
        </div>
    )
}

export default NotFound
