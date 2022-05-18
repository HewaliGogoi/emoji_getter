import React from 'react';

const TextPage = ({list}) => {

  return (
    <>
        <h1>TextPage</h1>
        {
            list.map((data) => <div>
                <p>{data}</p>
            </div>)
        }
    </>
  )
}

export default TextPage;