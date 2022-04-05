import React, { Component } from "react";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
    console.log("clicked")
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  render() {
    return (
      <main>
        
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    );
  }



}

export default Modal



