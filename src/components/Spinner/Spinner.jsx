import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Spinner = ({isLoading}) => {
  return (
    <div style={{ position: "relative" }}>
        {isLoading && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}>
            <RotatingLines strokeColor="white" />
          </div>
        )}
      </div>
  )
}

export default Spinner