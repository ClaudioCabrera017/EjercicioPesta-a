import React from 'react'
const Pestañacaja = ({pestaña}) => {
  const onClickHandler = ({e}) => {
      console.log (e, "Si llega ")
  };

  return pestaña.map((item, index)=>{
    return <button keyns= {index} onClick={(e) => onClickHandler(e, item)}>{item} se muestra</button>
  });

}
export default Pestañacaja;
