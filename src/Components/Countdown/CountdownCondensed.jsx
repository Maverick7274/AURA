import TimerCondensed from './Utils/TimerCondensed'
import { useCountdown } from './Utils/UseCountDown'

function CountdownCondensed() {
    const [days, hours, minutes, seconds] = useCountdown("September 14, 2023 09:15:00");
  return (
    <div className='flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-white text-[1rem] font-bold font-space-mono drop-shadow-[0.3px_1px_0px_#000000] tracking-[0.1rem]'>Unveiling Grandeur in : </h1>
        </div>
        <div>
          <TimerCondensed timerDays={days} timerHours={hours} timerMinutes={minutes} timerSeconds={seconds}/>
        </div>
    </div>
  )
}

export default CountdownCondensed