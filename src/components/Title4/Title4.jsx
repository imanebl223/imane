import React from 'react'
import './Title4.css'

const Title4 = ({subTitle,title}) => {
    return (
      <div className='title'>
          <p>{subTitle }</p>
        <h2>{title} </h2>
      </div>
    )
  }

export default Title4
