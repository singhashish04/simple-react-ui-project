import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const user = [
    { 
      img:'https://plus.unsplash.com/premium_photo-1688822011902-55a31e5a17a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'lightgreen',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'orange',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Underprocess'
    },
    {
      img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'pink',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'green',
      tag:'Overall Good'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'orange',
      tag:'Excellent'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661675410913-514ed463e345?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'purple',
      tag:'Average'
    }
  ]

  return (
    <div>
      <Section1 user={user}/>
    </div>
  )
}

export default App
