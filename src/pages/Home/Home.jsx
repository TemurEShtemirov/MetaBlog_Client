import React from 'react'
import Banner from '../../assets/bannner.png'

export default function Home() {
  return (
    <div className='container mt-5'>
      <main>
        <section className='section1'>
          <img src={Banner} alt={Banner} />
        </section>
      </main>
    </div>
  )
}
