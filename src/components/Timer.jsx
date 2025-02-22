import React from 'react'

export function Timer({ time }) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    &lt;div className="text-center text-6xl font-bold mb-4"&gt;
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    &lt;/div&gt;
  )
}
