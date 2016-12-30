import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class ModalDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
     showModal: true
    }
  }

  close() {
    this.setState({ showModal: false })
  }
  render () {

    return (
          <Modal show={this.state.showModal} backdrop={true} onHide={this.close.bind(this)}>
            <Modal.Header>
              <Modal.Title>{this.props.heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.content}</Modal.Body>
        </Modal>
    )
  }
}


ModalDialog.propTypes = {
  showModal: React.PropTypes.bool,
  heading: React.PropTypes.string.isRequired,
  content: React.PropTypes.object.isRequired

}

ModalDialog.defaultProps = {
  showModal: false
}
// className="modal-container"
// content: React.PropTypes.object.isRequired
// <div className="static-modal">
