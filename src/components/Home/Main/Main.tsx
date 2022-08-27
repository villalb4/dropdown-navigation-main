import React from 'react'
import './Main.css'
import hero from '../../../assets/image-hero-desktop.png'

function Main() {
  return (
    <main className='Main_component'>
        <section className='Main_section'>
            <h1 className='Main_title'>Make remote work</h1>
            <div className='Main_divSubTitle'>
                <p className='Main_subTitle'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            </div>
            <div className='Main_divLearnButton'>
                <button className='Main_learButton'>Learn more</button>
            </div>
        </section>
        <div className='Main_divHero'>
            <img className='Main_heroDesktop' src={hero} alt="hero" />
        </div>
    </main>
  )
}

export default Main