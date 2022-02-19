import React, { useState } from 'react';

function generatePassword() {
  console.log("generating password")
}

function Password() {
  const [password, setPassword] = useState('p@$$w0rd')

  return (
    <div>
      <div>{password}</div>
      <div>
        <button onClick={(e) => {
          generatePassword()
        }}>Generate</button>
      </div>
    </div>
  )
}

export default Password