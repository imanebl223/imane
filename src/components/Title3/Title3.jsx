import React from 'react'
import './Title3.css'

const Title3 = ({subTitle,title}) => {
    return (
      <div className='title'>
          <p>{subTitle }</p>
        <h2>{title} </h2>
      </div>
    )
  }

export default Title3
