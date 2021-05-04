import React from 'react'
import { GlobalContext } from '../Context/GlobalContext';

const Pagamento = () => {

    const { setStatePageNotFound, setFooterGlobal } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        setStatePageNotFound(true);
        setFooterGlobal(true);
    })

    return (
        <div>
            
        </div>
    )
}

export default Pagamento
