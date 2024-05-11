import React from 'react';
import styles from '/public/styles/CircularProgressBar.module.css';

const CircularProgressBar = ({ percentage, color, animate }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const progressBarClasses = `${styles.progressBar} ${animate ? styles.rotateIn : ''}`;

  return (
    <svg className={`${styles.circularProgress} ${animate && styles.rotateIn}`} width="100" height="120" viewBox="0 0 120 120">
      {/* Background Circle */}
      <circle className={styles.progressBarBackground} cx="60" cy="60" r={radius} />
      {/* Foreground Circle (Progress) */}
      <circle
        className={progressBarClasses}
        cx="60"
        cy="60"
        r={radius}
        stroke={color}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
      />
      <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className="text-white text-2xl font-semibold">
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;