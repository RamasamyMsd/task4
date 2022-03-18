import React from 'react'
import { useState } from 'react';
import { Teamheader, Teampara } from './Container.constants';
function ContainerTeam() {
    const [name,setname]= useState('')
    const [email,setemail]= useState('')
    const [msg,setmsg] = useState('')
    console.log('User-Entered-Details:',name,email,msg)

    function AlertUser(){

        const alphaExp = /^[a-zA-Z]+$/;
        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

      


       
        if(!name.match(alphaExp))
        {       
            alert("name should be in character")
            //    alert('Submitted Sucessfully')
        }
        
        if(!email.match(emailPattern))
        {
                alert('Email Character missing')
        }
    }
    
    
    return (
        <>
            <div className='container4'>
                <div className='content4'>
                    <h1>{Teamheader}</h1>
                    <p>{Teampara}</p>
                </div>
                <div className='ImageFlexBox'>
                    <div class="cardImageCnt">
                        <div className='card_img2'>
                            <img src="./siteimg/men1.jpeg" alt="user-image" />
                        </div>
                        <div className="card_info2">
                            <h2>John Doe</h2>
                            <h2>CEO&Founder</h2>
                        </div>
                        <div className="card_footer">
                            <img src="./siteimg/fb.png" id="fb" />
                            <img src="./siteimg/fb2.png" id="fb" />
                            <img src="./siteimg/fb3.png" id="fb" />
                        </div>
                    </div>
                    <div className="cardImageCnt">
                        <div className='card_img2'>
                            <img src="./siteimg/men1.jpeg" alt="user-image" />
                        </div>
                        <div className="card_info2">
                            <h2>John Doe</h2>
                            <h2>CEO&Founder</h2>
                        </div>
                        <div className="card_footer">
                            <img src="./siteimg/fb.png" id="fb" />
                            <img src="./siteimg/fb2.png" id="fb" />
                            <img src="./siteimg/fb3.png" id="fb" />
                        </div>
                    </div>
                    <div className="cardImageCnt">
                        <div className='card_img2'>
                            <img src="./siteimg/men1.jpeg" alt="user-image" />
                        </div>
                        <div className="card_info2">
                            <h2>John Doe</h2>
                            <h2>CEO&Founder</h2>
                        </div>
                        <div className="card_footer">
                            <img src="./siteimg/fb.png" id="fb" />
                            <img src="./siteimg/fb2.png" id="fb" />
                            <img src="./siteimg/fb3.png" id="fb" />
                        </div>
                    </div>
                    <div className="cardImageCnt">
                        <div className='card_img2'>
                            <img src="./siteimg/men1.jpeg" alt="user-image" />
                        </div>
                        <div className="card_info2">
                            <h2>John Doe</h2>
                            <h2>CEO&Founder</h2>
                        </div>
                        <div className="card_footer">
                            <img src="./siteimg/fb.png" id="fb" />
                            <img src="./siteimg/fb2.png" id="fb" />
                            <img src="./siteimg/fb3.png" id="fb" />
                        </div>
                    </div>




                </div>
                
                <div className="user-form">
                    <form>
                    <h2>Contact</h2>
                    <label>Enter your name:
                    <input
                            type="text" 
                            value={name}
                            onChange={(e)=>setname(e.target.value)}
                            required
          
                    />
                    </label>
                    <label>Enter your Email:
                     <input
                            type="email" 
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                            required
          
                    />
                    </label>
                    <label>Enter Message:
                     <input
                            type="text"
                            value={msg}
                            onChange={(e)=>setmsg(e.target.value)} 
                            
          
                    />
                    <button id="btn4" onClick={AlertUser}>Send</button>
                    </label>
                    
                    </form>
                    
                </div>
            </div>





        </>
    )
}

export default ContainerTeam