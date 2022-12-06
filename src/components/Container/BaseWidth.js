import React from 'react'

function BaseWidth({children, ...props}) {
  return (
    <div className="container mx-auto" {...props}>
        {children}
    </div>
  )
}

export default BaseWidth