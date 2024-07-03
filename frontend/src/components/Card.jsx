// import React from 'react'
import React, { useCallback, useRef } from 'react';
import { toJpeg } from 'html-to-image';

function Card({name,website}) {
    const ref = useRef(null)

    
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
          return
        }
    
        toJpeg(ref.current, { cacheBust: true, })
          .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'my-image-name.jpeg'
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
      }, [ref])


    return (
        <div className='m-2 w-80 h-80 bg-black' >
            <div ref={ref}>
                <div className='flex flex-col' >
                    <img className=" w-60 h-56" src="https://st2.depositphotos.com/1000423/8862/i/450/depositphotos_88626850-stock-photo-ask-any-questions.jpg" alt="Image" />
                </div>
                <div className='bg-white text-lg text-black flex text-center justify-center items-center'>{name}</div>
                <div className='bg-white text-lg text-black flex text-center justify-center items-center'>Website : {website} </div>
            </div>
            <div className='bg-white text-lg text-black flex text-center justify-center items-center'>

            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={onButtonClick}>Download</button>
            </div>
        </div>

    )
}

export default Card