import React from 'react'

export default function Card(props) {
  return (
    <div className='card-content'>
        <h4>Title: {props.title}</h4>
        <h4>Year: {props.year}</h4>
        <h6>Main actor: {props.actor}</h6>

        <div>
            <h5>{props.cult}</h5>
            <h5>{props.success}</h5>
        </div>
    </div>
  )
}
