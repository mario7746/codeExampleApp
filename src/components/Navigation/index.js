import React, { Component } from 'react'
import ReactDrawer from 'react-drawer'
import { Link } from 'react-router-dom'
import FaClose from 'react-icons/lib/fa/close'
import FaBars from 'react-icons/lib/fa/bars'
import {links} from './link'

import './style.css'
import 'react-drawer/lib/react-drawer.css'

class Navigation extends Component {
  state = {
    open: false,
    position: 'left',
    noOverlay: false
  }

  toggleDrawer = () => {
    this.setState({open: !this.state.open})
  }
  closeDrawer = () => {
    this.setState({open: false})
  }
  onDrawerClose = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        <div className="nav-button">
          <button
            onClick={this.toggleDrawer}
            disabled={this.state.open}
          >
            {!this.state.open ? <span><FaBars size={20}/></span> : <span><FaClose size={20}/></span>}
          </button>
        </div>
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}>
          <div className="close-button">
            <FaClose onClick={this.closeDrawer} className="icono-cross" size={20}/>
          </div>
          <ul className="nav-menu">
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <Link to={link.link} className="nav-link" onClick={this.closeDrawer}>
                    <p>{link.name}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </ReactDrawer>
      </div>
    )
  }
}

export default Navigation