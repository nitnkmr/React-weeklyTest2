import React from 'react'

const ProjectList = (props) => {
    console.log(props);
  return (
       <div className="card">
        <div className="cardTop">
            <img src={props.img} alt="" height={100}/>
        </div>
        <div className="cardBottom">{props.name}</div>
       </div>
  )
}

export default ProjectList