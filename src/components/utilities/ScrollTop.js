import React, {useEffect} from 'react'
import '../../css/scrollTop.css'

const ScrollTop = () => {

  const handleScroll = () => {
    const arrow = document.querySelector('.scroll-top');
    if (window.scrollY < 800) {
      arrow.className = 'scroll-top hide';
    } else {
      arrow.className = 'scroll-top'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

    // eslint-disable-next-line
  }, [])

  const handleClick = () => {
    document.querySelector('html').scrollTop = 0;
  }

  return (
    <div className='scroll-top hide'>
      <i className='fas fa-angle-up' onClick={() => handleClick()}></i>
    </div>
  )
}

export default ScrollTop
