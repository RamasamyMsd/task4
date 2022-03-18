import React from 'react'
import ContainerInfoElements from './ContainerInfoElements'
import { ElementHeader, textpara, button1text } from './Container.constants';


function ContainerInfo() {
  return (
    <>
   <div className="container2">
                    <div className="content">
                        <div className="row">
                            <ContainerInfoElements 
                                ElementHeader={ElementHeader}
                                textpara={textpara}
                                button1text={button1text}
                            />
                            
                        </div>
                    </div>
                    <img src='https://cdn.shopify.com/s/files/1/0018/1662/5265/products/11_Pro_Max_Space_Gray_849ed779-d9d9-4e0a-acb9-e7a57b810b81.png?v=1596175054'  alt="tttt" style={{width:'700px', paddingTop:'50px' , paddingLeft:'40px'} }/>
                    {/* <img src="./assets/images/img3.png" id="phone"/> */}
         </div>
    
    </>
  )
}

export default ContainerInfo

