import { useState, useEffect } from 'react'

function RestrictionWindowSize({ children }) {
  const MIN_WIDTH = 1400
  const MIN_HEIGHT = 830

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (windowDimensions.width < MIN_WIDTH || windowDimensions.height < MIN_HEIGHT) {
    return (
      <div className="flex content-center justify-center p-5">
        Минимальный размер окна для корректного отображения составляет {MIN_WIDTH} x {MIN_HEIGHT}!
        Пожалуйста, увеличьте окно до минимальных размеров
      </div>
    )
  }

  return <>{children}</>
}

export default RestrictionWindowSize
