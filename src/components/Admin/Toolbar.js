import React, { PureComponent } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Connect from './Connect';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    connected: state.application.connected
})

class Toolbar extends PureComponent {
    state = {
        isOpen: false,
        openConnect: false
    };

    toggle = () =>
        this.setState({ isOpen: !this.state.isOpen });

    handleConnect = () =>
        this.setState({ openConnect: true });

    handleClose = () =>
        this.setState({ openConnect: false });

    render() {
        const { connected } = this.props;
        return [
            <Navbar key={0} color="danger" dark expand="md">
                <Link className='navbar-brand' to="/">TiDB</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link
                                style={!connected ? { color: 'white' } : {}}
                                onClick={this.handleConnect}
                                className='nav-link' to="">
                                Connect
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>,
            <Connect key={1} open={this.state.openConnect} onClose={this.handleClose} />
        ];
    }
}

export default connect(mapStateToProps)(Toolbar);