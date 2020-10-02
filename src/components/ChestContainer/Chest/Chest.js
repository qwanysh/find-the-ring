import React, {Component} from 'react';
import './Chest.css';


class Chest extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.chest.isOpen !== nextProps.chest.isOpen;
  }

  render() {
    const {isOpen, hasRing} = this.props.chest;
    const classes = ['Chest'];

    if (isOpen) {
      classes.push('Chest--open');
    }
    if (isOpen && hasRing) {
      classes.push('Chest--has-ring');
    }

    return <div
        className={classes.join(' ')}
        onClick={() => this.props.openChest(this.props.index)}
    />;
  }
}

export default Chest;