import React, {Component} from 'react';

type Props = {
  label: string,
}

export default class Label extends Component {

  props: Props;

  render() {
    const className = "." + this.props.color;
    return (
      <div className={className}>
        {this.props.label}
      </div>
    );
  }
}
