import React, { Component } from 'react';
import styles from './ItemList.module.scss';
import cx from 'classnames';

const items = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.'
    ]

class ItemsList extends Component {
    state = {
        isCollapsed: false,
    };
    toggle = () => {
        this.setState(prevState => ({
            isCollapsed: !prevState.isCollapsed,
        }))
    }
    render(){
        const listClass = cx(styles.list,{
            [styles.isCollapsed]: this.state.isCollapsed,
        })
        return (
          <div>
              <button className="button is-dark is-large" onClick={this.toggle}>Collapse</button>
              <ul className={listClass}>
                  {items.map(item => (
                      <li className="notification">{item}</li>
      
                  ))}
              </ul>
              <p>Is list collapsed {this.state.isCollapsed.toString()}</p>
          </div>
        );
    }
}

export default ItemsList;
