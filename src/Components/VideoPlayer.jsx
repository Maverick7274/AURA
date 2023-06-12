/* eslint-disable react/prop-types */
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'


function VideoPlayer(props) {

    const title = props.title
    const thumbnail = props.thumbnail
    const videoURI = props.videoURI


  return (
    <div className='py-[2rem]'>
    <Video
          className="w-full"
          autoPlay={false}
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          poster={thumbnail}>
            <source src={videoURI} type='video/webm'/>
        </Video>

        <div className='py-[1rem] text-center'>
          <h1 className='text-[1.5rem] font-space-grotesk font-bold'>{title}</h1>
        </div>
    </div>
  )
}

export default VideoPlayer