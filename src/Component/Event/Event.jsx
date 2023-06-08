import React, { useState } from 'react'
import './Event.css'
function Event() {

  const data = [
    {
    name : "Binal",
    email : "b@gmail.com",
    phone : "2345566778",
    course : "javascript"
    },
    {
      name : "Princy",
      email : "p@gmail.com",
      phone : "2345566578",
      course : "css"
      },
      {
        name : "Jinal",
        email : "j@gmail.com",
        phone : "2345566878",
        course : "react"
        },
        {
          name : "Krina",
          email : "k@gmail.com",
          phone : "2345590708",
          course : "c language"
          }
]

const [profile, setProfile] = useState(
  null
)


 const dataShow = (n) =>{
  setProfile(n)
  console.log("done", n);
 }
  return (
    <div>
        <div className="container">
            <div className="row">
                <ul className='list-unstyled d-flex'>
                    {
                      data.map ((d)=>{
                        return(
                          <li className='p-3'>
                            <button onClick={()=> dataShow(d)}>
                              {
                                d.name
                              }
                            </button>
                          </li>
                        ) 
                      })
                    }
                </ul>
            </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-3">
              {
                profile != null
                ?
                <div className='profile'>
                  <h2>
                    {
                      profile.name
                    }
                  </h2>
                  <p>
                    <a href="">
                     {
                      profile.email
                     }
                    </a>
                  </p>
                  <p>
                    {
                      profile.phone
                    }
                  </p>
                  <p>
                    {
                      profile.course
                    }
                  </p>
              </div>
              :
             <h3>
               Data Not Found
             </h3>
              }
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Event