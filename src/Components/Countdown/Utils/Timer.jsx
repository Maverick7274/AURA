import React, {Fragment} from 'react'

function Timer({timerDays, timerHours, timerMinutes, timerSeconds})  {


  return (
    <Fragment>
        <section>
            <section>
                <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-info text-white rounded-box text-neutral-content">
                        <span className="countdown font-mono sm:text-5xl text-3xl">
                        <span className='font-space-mono' style={{"--value":timerDays}}></span>
                        </span>
                        <span className='font-space-grotesk'>days</span>
                    </div> 
                    <div className="flex flex-col p-2 bg-info text-white rounded-box text-neutral-content">
                        <span className="countdown font-mono sm:text-5xl text-3xl">
                        <span className='font-space-mono' style={{"--value":timerHours}}></span>
                        </span>
                        <span className='font-space-grotesk'>hours</span>
                    </div> 
                    <div className="flex flex-col p-2 bg-info text-white rounded-box text-neutral-content">
                        <span className="countdown font-mono sm:text-5xl text-3xl">
                        <span className='font-space-mono' style={{"--value":timerMinutes}}></span>
                        </span>
                        <span className='font-space-grotesk'>min</span>
                    </div> 
                    <div className="flex flex-col p-2 bg-info text-white rounded-box text-neutral-content">
                        <span className="countdown font-mono sm:text-5xl text-3xl">
                        <span className='font-space-mono' style={{"--value":timerSeconds}}></span>
                        </span>
                        <span className='font-space-grotesk'>sec</span>
                    </div>
                </div>
            </section>
        </section>
    </Fragment>
  )
}

Timer.defaultProps = {
    timerDays: 0,
    timerHours: 0,
    timerMinutes: 0,
    timerSeconds: 0
}

export default Timer