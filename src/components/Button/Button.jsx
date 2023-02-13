import clsx from 'clsx'
import React from 'react'

import './Button.scss'

const Button = ({ isPrimary, isOutline, isPlain, href, type, hasShadow, children }) => {
  const className = clsx({
    btn: true,
    'btn-primary': isPrimary,
    'btn-outline': isOutline,
    'btn-shadow': hasShadow,
    'btn-link': isPlain,
  })

  if (type === 'link') {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return <button className={className}>{children}</button>
}

export default Button
