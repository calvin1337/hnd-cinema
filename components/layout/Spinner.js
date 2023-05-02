import React from 'react'

export const Spinner = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-white pb-5 text-2xl">Loading</h1>
      <span className="loader">

      </span>
    </div>
  )
}
