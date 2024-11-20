import React from 'react'
import './Title5.css'

const Title5 = ({subTitle,title}) => {
    return (
      <div className='title'>
          <p>{subTitle }</p>
        <h2>{title} </h2>
      </div>
    )
  }

export default Title5
