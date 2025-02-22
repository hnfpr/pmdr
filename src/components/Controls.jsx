import React from 'react'

export function Controls({ isRunning, startTimer, stopTimer, pauseTimer, resetTimer }) {
  return (
    &lt;div className="flex justify-center space-x-4 mb-4"&gt;
      {!isRunning && &lt;button onClick={startTimer} className="bg-slate-700 text-slate-100 px-4 py-2 rounded"&gt;Start&lt;/button&gt;}
      {isRunning && &lt;button onClick={pauseTimer} className="bg-slate-700 text-slate-100 px-4 py-2 rounded"&gt;Pause&lt;/button&gt;}
      &lt;button onClick={stopTimer} className="bg-slate-700 text-slate-100 px-4 py-2 rounded"&gt;Stop&lt;/button&gt;
      &lt;button onClick={resetTimer} className="bg-slate-700 text-slate-100 px-4 py-2 rounded"&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  )
}
