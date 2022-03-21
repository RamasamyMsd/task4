import React, { useEffect } from 'react'
import { useState } from 'react';
import { Teamheader, Teampara } from './Container.constants';
function ContainerTeam() {
    const [name,setname]= useState('')
    const [email,setemail]= useState('')
    const [msg,setmsg] = useState('')
    const[userdata,setuserdata]= useState([])
    // console.log('User-Entered-Details:',name,email,msg)

    // const UserEnter =[];

    const UserData={
        name:name,
        email:email,
        msg:msg
    }

    // console.log(UserData)
   
    
    // console.log(UserEnter)

    async function AlertUser(event){

        const alphaExp = /^[a-zA-Z]+$/;
        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        
      

       
        if(!name.match(alphaExp) )
        {       
            alert("name should be in character or less than 5")
            //    alert('Submitted Sucessfully')
        }

        if(!email.match(emailPattern))
        {
                alert('Email Character missing')
        }
       
        else{
            event.preventDefault();
            const list = [...userdata]
            console.log('Payload',list)
            
            setuserdata(list,UserData)
            // setuserdata.(UserData)
            console.log('Data',userdata)
          

        }
       
    }

   

    useEffect(() => {
        if (name.length < 5) {
            
          return(
            document.getElementById("findme").innerHTML="Enter Character more than 5"
           
            )
           
            
        }

        else{
            return(
                document.getElementById("findme").innerHTML=""
               
                
                )

        }

      }, [name]);

      useEffect(() => {
        if (name.length < 5) {
            
          return(
            document.getElementById("errorname").style.border="1px solid red",
            document.getElementById("errorname2").style.border="1px solid red",
            document.getElementById("errornamemsg").style.border="1px solid red"
           
            )
           
            
        }

        else{
            return(
                document.getElementById("errorname").style.border="1px solid black",
                document.getElementById("errorname2").style.border="1px solid black",
                document.getElementById("errornamemsg").style.border="1px solid black"
               
                
                )

        }

      }, [name]);
 
  
  

    
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
                
                <div className="user-form" >
                    <form>
                    <h2>Contact</h2>
                    <label>Enter your name:
                    <input
                            type="text" 
                            value={name}
                            onChange={(e)=>setname(e.target.value)}
                            required
                            span class="error" id="errorname"
          
                    />
                    </label>
                    <label id="findme"></label>
                    <br/>
                    <label>Enter your Email:
                     <input
                            type="email" 
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                            required
                            id="errorname2"
                          
                    />
                    </label>
                    <label>Enter Message:
                     <input
                            type="textarea"
                            value={msg}
                            onChange={(e)=>setmsg(e.target.value)} 
                            id="errornamemsg"
                            
          
                    />
                    <button id="btn4" onClick={AlertUser}>Send</button>
                   
                    </label>
                    
                    </form>
                    
                </div>
                <table>
                    <tbody>
                    <tr>
                         <th>UserName</th>
                         <th>UserEmail</th>
                         <th>User-Msg</th>
                    </tr>
                           
                            
                               
                            {/* <tr>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{msg}</td>
                            </tr>
                                 */}
                           
                            


                            
                           
                    </tbody>
                   </table> 

                 
            </div>

          ]


        </>
    )

}

export default ContainerTeam