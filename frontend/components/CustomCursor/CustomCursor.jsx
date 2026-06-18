'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only detect true mobile devices (no hover capability and coarse pointer)
    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    setIsMobile(mediaQuery.matches);
    
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };
    
    // Fallback for older browsers that don't support addEventListener on matchMedia
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMediaChange);
    }

    const $bigBall = bigBallRef.current;
    const $smallBall = smallBallRef.current;
    
    if (isMobile || !$bigBall || !$smallBall) return;

    const onMouseMove = (e) => {
      gsap.to($bigBall, {
        duration: 0.4,
        x: e.clientX - 15,
        y: e.clientY - 15,
      });
      gsap.to($smallBall, {
        duration: 0.1,
        x: e.clientX - 5,
        y: e.clientY - 7,
      });
    };

    const onMouseHover = () => {
      gsap.to($bigBall, {
        duration: 0.3,
        scale: 4,
      });
    };

    const onMouseHoverOut = () => {
      gsap.to($bigBall, {
        duration: 0.3,
        scale: 1,
      });
    };

    // Attach mouse move
    window.addEventListener('mousemove', onMouseMove);

    // Event delegation for hover states
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hoverable, input, textarea, select')) {
        onMouseHover();
      }
    };
    
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .hoverable, input, textarea, select')) {
        onMouseHoverOut();
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      
      <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
