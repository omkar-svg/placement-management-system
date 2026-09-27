import React from 'react';
import './Avatar.css';

// Renders a circular initials-avatar. Used as a stand-in wherever the
// original design shows a person's photo, since real photo assets
// aren't part of our data. Shared across all pages via components/common.
function Avatar({ name, size = 44, online = false }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <span className="avatar" style={{ width: size, height: size, fontSize: size * 0.38 }}>
      {initials}
      {online && <span className="avatar__status" aria-label="online" />}
    </span>
  );
}

export default Avatar;
