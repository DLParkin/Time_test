import React from 'react';

export function TimeDisplay(props) {
  const { hour, minute, timeOfDay } = props;
  return (
    <p>It's {hour} {minute} {timeOfDay}</p>
  )
}
