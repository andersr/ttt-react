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
      <div className="static-modal">
          <Modal show={this.state.showModal} backdrop={true} onHide={this.close.bind(this)}>
            <Modal.Header>
              <Modal.Title>{this.props.headerText}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              One fine body...
            </Modal.Body>
        </Modal>
      </div>
    )
  }
}


ModalDialog.propTypes = {
  showModal: React.PropTypes.bool,
  headerText: React.PropTypes.string.isRequired
}

ModalDialog.defaultProps = {
  showModal: false
}
// ,
// content: React.PropTypes.object.isRequired
