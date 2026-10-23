import React from 'react'

type propType={
    open:boolean,
    onClose:()=>void
}

function AuthModel({open,onClose}:propType) {
  return (
    <div>AuthModel</div>
  )
}

export default AuthModel