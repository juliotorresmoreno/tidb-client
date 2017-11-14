import React, { PureComponent } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    ModalFooter, Form, FormGroup, Input,
    Label, Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { actionsCreators as applicationActionsCreators } from '../../store/application';

const mapStateToProps = (state) => ({
    server: state.application.server
})

const mapDispatchToProps = {
    validateServer: applicationActionsCreators.validateServer
}


class Connect extends PureComponent {
    static defaultProps = {
        open: false,
        onClose: () => { }
    }

    state = {
        server: ''
    }

    componentWillReceiveProps(props) {
        if (props.open && !this.props.open)
            this.setState({ server: this.props.server })
    }

    handleClose = () => {
        this.props.onClose();
    }
    handleChange = ({ target: { name, value } }) =>
        this.setState({ [name]: value });

    handleConnect = () => {
        const { server } = this.state;
        this.props.validateServer(server)
            .then(this.handleClose);
    }

    render() {
        const { server } = this.state;
        return (
            <Modal isOpen={this.props.open} toggle={this.handleClose} className={this.props.className}>
                <ModalHeader toggle={this.handleClose}>Connect to server</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label sm={2}>Server</Label>
                            <Col sm={10}>
                                <Input onChange={this.handleChange} type="text" name="server" value={server} />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={this.handleConnect}>
                        Connect
                      </Button>{' '}
                    <Button
                        color="secondary"
                        onClick={this.handleClose}>
                        Cancel
                     </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connect);