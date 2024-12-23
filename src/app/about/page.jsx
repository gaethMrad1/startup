import About from '@/components/About/About';
import React from 'react'

export const metadata = {
  title: "Sartup-About",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <About />
      </div>
    </div>
  )
}
