import React from 'react'

const Footer = (props) => {
    return (
        <div>
           {props.finish}
           {props.children} 
        </div>
    )
}

export default Footer
