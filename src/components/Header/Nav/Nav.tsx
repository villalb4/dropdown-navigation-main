import React from 'react'
import arrow_down from '../../../assets/icon-arrow-down.svg'
import './Nav.css'

function Nav() {
  return (
    <nav>
      <ul className='Nav_ul'>
        <li>
          <div className='Nav_lidivContent'>
            <span className='Nav_span'>Features</span>
						<div className='Nav_divIconArrow'>
            	<img src={arrow_down} alt="arrow" />
						</div>
          </div>
        </li>

				<li>
          <div className='Nav_lidivContent'>
            <span className='Nav_span'>Company</span>
            <div className='Nav_divIconArrow'>
            	<img src={arrow_down} alt="arrow" />
						</div>
          </div>
        </li>

				<li>
          <span className='Nav_span'>Careers</span>
        </li>

				<li>
          <span className='Nav_span'>About</span>
        </li>
      </ul>

			<div className='Nav_divButtons'>
				<div>
					<button className='Nav_buttonLO'>Login</button>
				</div>
				<div>
					<button className='Nav_buttonRE'>Register</button>
				</div>
			</div>
    </nav>
  )
}

export default Nav