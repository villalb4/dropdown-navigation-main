import React, {useState} from 'react'
import './Nav.css'
// --- images ---
import arrow_down from '../../../assets/icon-arrow-down.svg'
import todo from '../../../assets/icon-todo.svg'
import calendar from '../../../assets/icon-calendar.svg'
import reminders from '../../../assets/icon-reminders.svg'
import planning from '../../../assets/icon-planning.svg'


function Nav() {

  const [hover, setHover] = useState(false)

  function handleHover() {
    setHover(true)
  }

  function handleHoverOut() {
    setHover(false)
  }

  return (
    <nav>
      <ul className='Nav_ul'>
        <li 
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          className='Nav_li'
        >
          <div className='Nav_lidivContent'>
            <span className='Nav_span'>Features</span>
						<div className='Nav_divIconArrow'>
            	<img src={arrow_down} alt="arrow" />
						</div>
          </div>
          { hover &&
            <div className='Nav_dropdown'>
              <ul className='Nav_ulDropdown'>
                <li className='Nav_liDropdown'>
                  <div className='Nav_divImageDropdown'>
                    <img src={todo} alt="Icon Dropdown" />
                  </div>
                  <span className='Nav_spanDropdown'>Todo List</span>
                </li>
                <li className='Nav_liDropdown'>
                  <div className='Nav_divImageDropdown'>
                    <img src={calendar} alt="Icon Dropdown" />
                  </div>
                  <span className='Nav_spanDropdown'>Calendar</span>
                </li>
                <li className='Nav_liDropdown'>
                  <div className='Nav_divImageDropdown'>
                    <img src={reminders} alt="Icon Dropdown" />
                  </div>
                  <span className='Nav_spanDropdown'>Reminders</span>
                </li>
                <li className='Nav_liDropdown'>
                  <div className='Nav_divImageDropdown'>
                    <img src={planning} alt="Icon Dropdown" />
                  </div>
                  <span className='Nav_spanDropdown'>Planning</span>
                </li>
              </ul>
            </div>
          }
        </li>

				<li className='Nav_li'>
          <div className='Nav_lidivContent'>
            <span className='Nav_span'>Company</span>
            <div className='Nav_divIconArrow'>
            	<img src={arrow_down} alt="arrow" />
						</div>
          </div>
        </li>

				<li className='Nav_li'>
          <span className='Nav_span'>Careers</span>
        </li>

				<li className='Nav_li'>
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