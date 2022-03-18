import React from 'react'
import { Flexheader,FlexPara } from './Container.constants';
import FlexCard from './FlexCard'
function ContainerServices() {
  return (
    <>
    <div className='container3'>
        <div className='Contheader'>
        <h4>Our <span class='Services'>Services</span></h4>
        <h5>"Asperiores ea commodi eius a quo omins esse"</h5>
        </div>

        <div className='ContFLex'>
        <div className="card_holder">
                        
                        <FlexCard 
                        header={Flexheader}
                        paratext={FlexPara}
                        />
                         <FlexCard 
                        header={Flexheader}
                        paratext={FlexPara}
                        />
                         <FlexCard 
                        header={Flexheader}
                        paratext={FlexPara}
                        />
                         <FlexCard 
                        header={Flexheader}
                        paratext={FlexPara}
                        />
                         <FlexCard 
                        header={Flexheader}
                        paratext={FlexPara}
                        />
                         <FlexCard 
                        header={Flexheader}
                        paratext={FlexPara}
                        />

        </div>

    </div>
    </div>
    
    
    
    </>
  )
}

export default ContainerServices