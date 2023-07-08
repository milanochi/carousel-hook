import { useState } from 'react'


function useCycle(images) {
    const [current, setCurrent] = useState(0)

    const next = (offset) => {
        let value = +offset;

        if(value === null || value === undefined || value === 0) {
            setCurrent((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
            )
       }
     
       else if(value >= 0) {
            setCurrent((prevIndex) =>
            prevIndex + value >= images.length ? 0 : prevIndex + value
            )
        }
        else{
            setCurrent((prevIndex) =>
            prevIndex + value < 0 ? images.length + value : prevIndex + value
            )
        }
    }
    return [current, next]
}

export default useCycle