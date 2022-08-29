import React, {useState} from 'react'
import './Nav.css'
// --- images ---
import arrow_down from '../../../assets/icon-arrow-down.svg'
import arrow_up from '../../../assets/icon-arrow-up.svg'
import todo from '../../../assets/icon-todo.svg'
import calendar from '../../../assets/icon-calendar.svg'
import reminders from '../../../assets/icon-reminders.svg'
import planning from '../../../assets/icon-planning.svg'


function Nav() {

  const [hoverFt, setHoverFt] = useState(false)
  const [hoverCp, setHoverCp] = useState(false)

  function handleHover() {
    setHoverFt(true)
  }

  function handleHoverOut() {
    setHoverFt(false)
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
            <span className={hoverFt ? 'Nav_span open' : 'Nav_span'}>Features</span>
						<div className='Nav_divIconArrow'>
              {hoverFt ?
            	  <img src={arrow_down} alt="arrow" />
                :
                <img src={arrow_up} alt="arrow" />
              }
						</div>
          </div>
          { hoverFt &&
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

				<li 
          className='Nav_li'
          onMouseEnter={() => setHoverCp(true)}
          onMouseLeave={() => setHoverCp(false)}
        >
          <div className='Nav_lidivContent'>
            <span className={hoverCp ? 'Nav_span open' : 'Nav_span'}>Company</span>
            <div className='Nav_divIconArrow'>
              {hoverCp ?
            	  <img src={arrow_down} alt="arrow" />
                :
                <img src={arrow_up} alt="arrow" />
              }
						</div>
          </div>
          { hoverCp &&
            <div className='Nav_dropdownCp'>
              <ul className='Nav_ulDropdownCp'>
                <li className='Nav_liDropdownCp'>
                  <span className='Nav_spanDropdown'>History</span>
                </li>
                <li className='Nav_liDropdownCp'>
                  <span className='Nav_spanDropdown'>Our Team</span>
                </li>
                <li className='Nav_liDropdownCp'>
                  <span className='Nav_spanDropdown'>blog</span>
                </li>
              </ul>
            </div>
          }
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