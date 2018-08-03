import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {ButtonToolbar, Button, Modal} from  'react-bootstrap';

class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.handleShow = this.handleShow.bind(this);
      this.handleHide = this.handleHide.bind(this);
      this.state = {
        show: false
      };
    }
    handleShow() {
      this.setState({ show: true });
    }
    handleHide() {
      this.setState({ show: false });
    }
    render() {
      return (
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button>
  
          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
                Mollitia reiciendis porro quo magni incidunt dolore amet atque
                facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum
                dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis
                laudantium quibusdam quidem corporis architecto veritatis. Ex
                facilis minima beatae sunt perspiciatis placeat. Quasi corporis
                odio eaque voluptatibus ratione magnam nulla? Amet cum maiores
                consequuntur totam dicta! Inventore adipisicing vel vero odio modi
                doloremque? Vitae porro impedit ea minima laboriosam quisquam
                neque. Perspiciatis omnis obcaecati consequatur sunt deleniti
                similique facilis sequi. Ipsum harum vitae modi reiciendis
                officiis. Quas laudantium laudantium modi corporis nihil provident
                consectetur omnis, natus nulla distinctio illum corporis. Sit ex
                earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum
                illum architecto aspernatur perspiciatis error fuga illum, tempora
                harum earum, a dolores. Animi facilis inventore harum dolore
                accusamus fuga provident molestiae eum! Odit dicta error dolorem
                sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum
                saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat
                officia culpa sint! Beatae voluptates voluptatem excepturi
                molestiae alias in tenetur beatae placeat architecto. Sit possimus
                rerum fugiat sapiente aspernatur. Necessitatibus tempora animi
                dicta perspiciatis tempora a velit in! Doloribus perspiciatis
                doloribus suscipit nam earum. Deleniti veritatis eaque totam
                assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus
                eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur
                alias ipsum repudiandae! Quia omnis quisquam dignissimos a
                mollitia. Suscipit aspernatur eum maiores repellendus ipsum
                doloribus alias voluptatum consequatur. Consectetur quibusdam
                veniam quas tenetur necessitatibus repudiandae? Rem optio vel
                alias neque optio sapiente quidem similique reiciendis tempore.
                Illum accusamus officia cum enim minima eligendi consectetur nemo
                veritatis nam nisi! 
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      );
    }
    
  }
  
//   render(<Example />);