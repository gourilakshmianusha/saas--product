/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';

interface SastikButtonProps {
  children: string;
  onClick?: () => void;
  href?: string;
  variant?: 'gradient' | 'white';
  iconType?: 'star' | 'play' | 'sms' | 'call' | 'none';
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const SastikButton: React.FC<SastikButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'gradient',
  iconType = 'star',
  className = '',
  style,
  type = 'button',
  ariaLabel,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const touchTimerRef = useRef<number | null>(null);
  const isWhite = variant === 'white';

  useEffect(() => {
    return () => {
      if (touchTimerRef.current) {
        window.clearTimeout(touchTimerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    if (touchTimerRef.current) {
      window.clearTimeout(touchTimerRef.current);
    }
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    // Keep wave roll animation visible on touch release, then smoothly roll back down
    touchTimerRef.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 650);
  };

  const renderIcon = () => {
    if (iconType === 'star') {
      return (
        <div
          className="arrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.18) rotate(45deg)' : 'scale(1) rotate(0deg)',
          }}
        >
          <img src="/assets/img/icon/multi-star.svg" alt="icon" width={16} height={16} />
        </div>
      );
    }
    if (iconType === 'play') {
      return (
        <div
          className="arrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.18) translateX(3px)' : 'scale(1) translateX(0)',
          }}
        >
          <img src="/assets/img/icon/play-icon.svg" alt="icon" width={14} height={14} />
        </div>
      );
    }
    if (iconType === 'sms') {
      return (
        <div
          className="arrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.18) translateY(-2px)' : 'scale(1) translateY(0)',
          }}
        >
          <img src="/assets/img/icon/sms-icon02.svg" alt="icon" width={16} height={16} />
        </div>
      );
    }
    if (iconType === 'call') {
      return (
        <div
          className="arrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.18) rotate(15deg)' : 'scale(1) rotate(0deg)',
          }}
        >
          <img src="/assets/img/icon/call-white-icon.svg" alt="icon" width={16} height={16} />
        </div>
      );
    }
    return null;
  };

  // Split text into characters for staggered rolling wave animation
  const characters = children.split('');

  const innerContent = (
    <>
      <div
        className="inner"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          gap: 10,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {iconType === 'call' && renderIcon()}
        <div
          className="text"
          data-link-shadow=""
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            overflow: 'hidden',
            height: '1.4em',
            lineHeight: 1.4,
            verticalAlign: 'middle',
          }}
        >
          {characters.map((char, index) => {
            const isSpace = char === ' ';
            return (
              <span
                key={index}
                className="chars-link"
                style={{
                  display: 'inline-block',
                  whiteSpace: 'pre',
                  lineHeight: 1.4,
                  transition: 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: isHovered
                    ? `${index * 18}ms`
                    : `${(characters.length - index) * 12}ms`,
                  transform: isHovered ? 'translateY(-1.35em)' : 'translateY(0)',
                  textShadow: isWhite ? '0 1.35em #2f1257' : '0 1.35em #ffffff',
                }}
              >
                {isSpace ? '\u00A0' : char}
              </span>
            );
          })}
        </div>
        {iconType !== 'call' && renderIcon()}
      </div>
      {!isWhite && (
        <div className="btn-shape" style={{ pointerEvents: 'none' }}>
          <div className="shape shape--1" />
          <div className="shape shape--2" />
          <div className="shape shape--3" />
        </div>
      )}
    </>
  );

  const baseClasses = `thm-btn thm-btn--gradient2 ${isWhite ? 'bg_white' : ''} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={style}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label={ariaLabel || children}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      style={style}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label={ariaLabel || children}
    >
      {innerContent}
    </button>
  );
};
