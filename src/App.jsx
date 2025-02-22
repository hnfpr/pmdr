import React, { useState, useEffect } from 'react'
import { Timer } from './components/Timer'
import { Controls } from './components/Controls'
import { TodoList } from './components/TodoList'
import { Settings } from './components/Settings'
import { GearIcon } from '@radix-ui/react-icons'

const DEFAULT_FOCUS_TIME = 25 * 60
const DEFAULT_BREAK_TIME = 5 * 60
const DEFAULT_CYCLES = 4

export default function App() {
  const [time, setTime] = useState(DEFAULT_FOCUS_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [cycles, setCycles] = useState(DEFAULT_CYCLES)
  const [focusTime, setFocusTime] = useState(DEFAULT_FOCUS_TIME)
  const [breakTime, setBreakTime] = useState(DEFAULT_BREAK_TIME)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0) {
            clearInterval(interval)
            setIsRunning(false)
            playSound()
            if (isBreak) {
              setTime(focusTime)
              setIsBreak(false)
            } else {
              setTime(breakTime)
              setIsBreak(true)
              if (cycles > 1) {
                setCycles(cycles - 1)
              } else {
                setCycles(DEFAULT_CYCLES)
              }
            }
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, isBreak, focusTime, breakTime, cycles])

  const playSound = () => {
    const audio = document.getElementById('singingBowl')
    audio.currentTime = 0
    audio.play()
  }

  const startTimer = () => {
    setIsRunning(true)
    playSound()
  }

  const stopTimer = () => {
    setIsRunning(false)
    setTime(focusTime)
    setIsBreak(false)
    setCycles(DEFAULT_CYCLES)
  }

  const pauseTimer = () => setIsRunning(false)

  const resetTimer = () => {
    setTime(focusTime)
    setIsBreak(false)
    setCycles(DEFAULT_CYCLES)
  }

  const toggleSettings = () => setShowSettings(!showSettings)

  return (
    &lt;div className="container mx-auto p-4 bg-slate-900 text-slate-100 min-h-screen"&gt;
      &lt;div className="flex justify-end mb-4"&gt;
        &lt;button onClick={toggleSettings} className="text-slate-100"&gt;
          &lt;GearIcon /&gt;
        &lt;/button&gt;
      &lt;/div&gt;
      &lt;Timer time={time} /&gt;
      &lt;Controls 
        isRunning={isRunning} 
        startTimer={startTimer} 
        stopTimer={stopTimer} 
        pauseTimer={pauseTimer} 
        resetTimer={resetTimer} 
      /&gt;
      &lt;TodoList /&gt;
      {showSettings && (
        &lt;Settings 
          focusTime={focusTime} 
          setFocusTime={setFocusTime} 
          breakTime={breakTime} 
          setBreakTime={setBreakTime} 
          cycles={cycles} 
          setCycles={setCycles} 
        /&gt;
      )}
    &lt;/div&gt;
  )
}
