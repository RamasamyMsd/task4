import React from 'react'

function ContainerInfoElements({ElementHeader,textpara,button1text}) {
  return (
    <>
         <h3>{ElementHeader}</h3>
         
        <p>{textpara}</p>
        <button type="button" id="btn1">{button1text}</button>
    </>
  )
}

export default ContainerInfoElements