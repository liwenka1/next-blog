import React, { ReactElement, useEffect, useRef } from 'react'
import { RenderCanvas } from './RenderCanvas'

interface Props {
  welcome: string
}

export default function Welcome({ welcome }: Props): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    RenderCanvas()
    ref.current?.classList.add('transition-in')
  }, [])
  return (
    <div>
      <canvas
        className="absolute inset-0 pointer-events-none bg-skin-base"
        id="canvas"
      ></canvas>
      <div className="relative z-10 flex h-[calc(100vh_-_135px)] items-center justify-center">
        <div ref={ref} className="px-4 text-3xl md:text-4xl">
          {welcome.split('').map((latter, index) => (
            <span
              style={{ transitionDelay: 0.2 * (index + 1) + 's' }}
              className="transition-opacity opacity-1"
              key={index}
            >
              {latter}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
