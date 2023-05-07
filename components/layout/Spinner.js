// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: functional component called Spinner which returns a loading spinner with the text "Loading". 

/* Spinner */
 /* https://cssloaders.github.io/ */

export const Spinner = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-white pb-5 text-2xl">Loading</h1>
      <span className="loader">

      </span>
    </div>
  )
}
