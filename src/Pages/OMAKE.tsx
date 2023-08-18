import React from 'react'
import { useNavigate } from 'react-router-dom'

function OMAKE() {

  const navigate = useNavigate()
  return (
    <div>
      아직 아무 것도 없어요!!!
      <button onClick={() => { navigate("/") }}>돌아가기</button>
    </div>
  )
}

export default OMAKE