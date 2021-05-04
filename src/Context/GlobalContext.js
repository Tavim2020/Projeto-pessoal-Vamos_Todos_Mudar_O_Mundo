import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children})=> {

    const [statePageNotFound, setStatePageNotFound] = React.useState(false);
    const [footerGlobal, setFooterGlobal] = React.useState(false);
    const [mobile, setMobile] = React.useState(false);

    React.useEffect(()=>{ 
          window.addEventListener('resize', ()=>{
              if(window.screen.width <= 980){
                  setMobile(true);
              }
              else{
                  setMobile(false);
              }
          })

          if(window.screen.width <= 980){
              setMobile(true);
          }
    }, [mobile])



    return (
    <GlobalContext.Provider value={{
        statePageNotFound,
        setStatePageNotFound,
        footerGlobal, 
        mobile, 
        setMobile,
        setFooterGlobal,
    }}>
        {children}
    </GlobalContext.Provider>
    )
}