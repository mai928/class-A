'use client'
import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CountDownTimer = () => {


    const minuteSeconds = 60;
    const hourSeconds = 3600;
    const daySeconds = 86400;


    const timerProps = {
        isPlaying: true,
        size: 80,
        strokeWidth: 5
    };

    const renderTime = (dimension, time) => {
        return (
            <div className="text-center">
                <div className="font-bold text-3xl">{time}</div>
                <div className='text-sm'>{dimension}</div>
            </div>
        );
    };



    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
    const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
    const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
    const getTimeDays = (time) => (time / daySeconds) | 0;


    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <section className='flex gap-5'>

            <CountdownCircleTimer
                {...timerProps}
                colors="#f83730"
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        <div className='text-white'>
                            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}

                        </div>
                    </span>
                )}
            </CountdownCircleTimer>


            <CountdownCircleTimer
                {...timerProps}
                colors="#f83730"
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        <div className='text-white'>
                            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}

                        </div>
                    </span>
                )}
            </CountdownCircleTimer>

            <CountdownCircleTimer
                {...timerProps}
                colors="#f83730"
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        <div className='text-white'>
                            {renderTime("min", getTimeMinutes(hourSeconds - elapsedTime))}

                        </div>
                    </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#f83730"
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > 0
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        <div className='text-white'>
                            {renderTime("sec", getTimeSeconds(elapsedTime))}

                        </div>
                    </span>
                )}
            </CountdownCircleTimer>
        </section>
    )
}

export default CountDownTimer