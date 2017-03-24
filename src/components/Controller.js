import React from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import * as actions from '../actions';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  onClick(e) {
    this.props.dispatch(actions.createCameraSession(e));
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>
          写真を取る
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    camera: state.camera,
  }),
)(Controller);
