/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
import { Blurhash } from 'react-blurhash'

function BlurHashImages(props) {

    const src = props.src
    const hash = props.hash
    const width = props.width
    const height = props.height

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])


  return (
    <div>
        <div style={{display: imageLoaded ? 'none' : 'inline'}}>
            <Blurhash
                hash={hash}
                width={width}
                height={height}
                resolutionX={32}
                resolutionY={32}
                punch={1}
            />
        </div>
        {imageLoaded && (
        <img
            src={src}
            alt=""
            style={{display: !imageLoaded ? 'none' : 'inline'}}
        />
        
        )}

        
    </div>
  )
}

export default BlurHashImages