import {useState} from 'react'

function ImageSlider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if(currentSlide >= slides.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }
    const prevSlide = () => {
        if(currentSlide <= 0) {
            setCurrentSlide(slides.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }
    
    const goToSlide = (index) => {
        setCurrentSlide(index);
    }


    const slides = [
        {
            url: 
        },
        {
            url: 
        },
        {
            url: 
        },
        {
            url: 
        },
        {
            url: 
        },
    ];




  return (
    <div>
        <div className='h-screen w-full relative group'>
            <div className='w-full h-full bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentSlide].url})`}}></div>
            {/* Left Arrow */}
            <div onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 bg-black/70 rounded-3xl hover:bg-white/70 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white hover:text-black cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.707 3.293a1 1 0 010 1.414L6.414 9H17a1 1 0 110 2H6.414l4.293 4.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </div>
            {/* Right Arrow */}
            <div onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] bg-black/50 -translate-x-0 -translate-y-[-50%] right-5 rounded-3xl hover:bg-white/70 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white hover:text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 010-2h10.586L9.293 4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='hidden group-hover:block absolute bottom-[6.56rem] translate-x-0 -translate-y-[-50%] left-5 bg-black/70 rounded-3xl cursor-pointer'>
                <div className='flex justify-center py-2'>
                    {slides.map((slide, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" key={index} onClick={() => goToSlide(index)} className={`h-5 w-5 mx-1 cursor-pointer ${index === currentSlide ? 'text-white' : 'text-gray-400'}`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider