import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='overflow-x-auto h-full rounded-4xl flex flex-nowrap gap-5 w-2/3 p-6'>
      {props.user.map(function(ele,idx){
        return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag} color={ele.color}/>
      })}
    </div>
  )
}

export default RightContent
