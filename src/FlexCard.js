import React from 'react'

function FlexCard(props) {
  return (
      <>
       <div className="card">
            <div className="card_data">
                <div className="card_data_img">
                             
                </div>
                <div className="card_data_details">
                    <div className="card_row">
                        <div className="col"> <h3>{props.header}</h3>
                        </div>
                    </div>
                        <div className="card_row">
                        <div className="col">
                            <p>{props.paratext}</p>
                        </div>
                        </div>
                                    
                 </div>  

            </div>
        </div> 
      </>
    
  )
}

export default FlexCard