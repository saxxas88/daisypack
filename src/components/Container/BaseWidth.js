import React from 'react'

function BaseWidth({children, ...props}) {
  return (
    <div className="container mx-auto bg-cyan-800" {...props}>
        {children}
    </div>
  )
}

export default BaseWidth