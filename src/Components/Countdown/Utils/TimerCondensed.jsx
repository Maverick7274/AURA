import React, {Fragment} from 'react'

function TimerCondensed({timerDays, timerHours, timerMinutes, timerSeconds}) {
  return (
    <Fragment>
        <span className="countdown text-2xl font-[500] font-space-mono">
          <span className='font-space-mono' style={{"--value":timerDays}}></span>
        </span>
        <span className='text-neutral font-[700] text-2xl drop-shadow-[0.3px_1px_0px_#ffffff]'>d</span>
        <span className="countdown text-2xl font-[500] font-space-mono">
          <span className='font-space-mono' style={{"--value":timerHours}}></span>
        </span>
        <span className='text-neutral font-[700] text-2xl drop-shadow-[0.3px_1px_0px_#ffffff]'>h</span>
        <span className="countdown text-2xl font-[500] font-space-mono">
          <span className='font-space-mono' style={{"--value":timerMinutes}}></span>
        </span>
        <span className='text-neutral font-[700] text-2xl drop-shadow-[0.3px_1px_0px_#ffffff]'>m</span>
        <span className="countdown text-2xl font-[500] font-space-mono">
          <span className='font-space-mono' style={{"--value":timerSeconds}}></span>
        </span>
        <span className='text-neutral font-[700] text-2xl drop-shadow-[0.3px_1px_0px_#ffffff]'>s</span>
    </Fragment>
  )
}

TimerCondensed.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10
}


export default TimerCondensed