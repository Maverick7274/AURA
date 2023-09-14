import { useCountdown } from './Utils/UseCountDown'
import Timer from './Utils/Timer'

const Countdown = () => {
    const [days, hours, minutes, seconds] = useCountdown("September 14, 2023 18:15:00");

    // console.log(days + " " + hours + " " + minutes + " " + seconds)
    // timerDays={days} timerHours={hours} timerMinutes={minutes} timerSeconds={seconds}
  return (
    <>
        <Timer timerDays={days} timerHours={hours} timerMinutes={minutes} timerSeconds={seconds}/>
    </>
  )
}

export default Countdown