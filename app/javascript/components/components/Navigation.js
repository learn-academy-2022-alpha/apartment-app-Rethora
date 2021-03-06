import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'

class Navigation extends Component {
  render() {
    const {
      logged_in,
      new_user_route,
      current_user,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Nav>
        <NavItem>
          <NavLink to='/'>
            <span
              className='nav-link'
            >
              Home
            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/apartmentsindex'
          >
            <span
              className='nav-link'
            >
              All Apartments
            </span>
          </NavLink>
        </NavItem>
        {logged_in &&
          <NavItem>
            <NavLink
              to='/myapartments'
            >
              <span
                className='nav-link'
              >
                My Apartments
              </span>
            </NavLink>
          </NavItem>
        }
        {logged_in &&
          <NavItem>
            <NavLink
              to='/newapartment'
            >
              <span
                className='nav-link'
              >
                New Apartment
              </span>
            </NavLink>
          </NavItem>
        }
        {logged_in &&
          <NavItem>
            <a
              href={sign_out_route}
              className='nav-link'
            >
              Sign Out
            </a>
          </NavItem>
        }
        {logged_in &&
          <NavItem>
            <span
              className='nav-link username'
            >
              Hello {current_user.first_name}
            </span>
          </NavItem>
        }
        {!logged_in &&
          <NavItem>
            <a
              href={sign_in_route}
              className='nav-link'
            >
              Sign In
            </a>
          </NavItem>
        }
        {!logged_in &&
          <NavItem>
            <a
              href={new_user_route}
              className='nav-link'
            >
              Sign Up
            </a>
          </NavItem>
        }
      </Nav>
    )
  }
}

export default Navigation
