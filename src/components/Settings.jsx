import React from 'react'

export function Settings({ focusTime, setFocusTime, breakTime, setBreakTime, cycles, setCycles }) {
  return (
    &lt;div className="bg-slate-800 p-4 rounded"&gt;
      &lt;h2 className="text-slate-100 text-lg mb-2"&gt;Settings&lt;/h2&gt;
      &lt;div className="mb-2"&gt;
        &lt;label className="text-slate-100"&gt;Focus Time (minutes): &lt;/label&gt;
        &lt;input 
          type="number" 
          value={focusTime / 60} 
          onChange={(e) => setFocusTime(e.target.value * 60)} 
          className="bg-slate-700 text-slate-100 p-1 w-20"
        /&gt;
      &lt;/div&gt;
      &lt;div className="mb-2"&gt;
        &lt;label className="text-slate-100"&gt;Break Time (minutes): &lt;/label&gt;
        &lt;input 
          type="number" 
          value={breakTime / 60} 
          onChange={(e) => setBreakTime(e.target.value * 60)} 
          className="bg-slate-700 text-slate-100 p-1 w-20"
        /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label className="text-slate-100"&gt;Total Cycles: &lt;/label&gt;
        &lt;input 
          type="number" 
          value={cycles} 
          onChange={(e) => setCycles(Number(e.target.value))} 
          className="bg-slate-700 text-slate-100 p-1 w-20"
        /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}
