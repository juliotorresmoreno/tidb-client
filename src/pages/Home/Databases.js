import React, { PureComponent } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import Table from '../../components/Table';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

class Databases extends PureComponent {
    state = {
        sql: '',
        data: [
            {
                id: 1,
                name: "pedro"
            },
            {
                id: 2,
                name: "maria"
            }
        ]
    }
    handleQuery = () => {
        alert('sds');
    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    doHighlight = (input) => {
        return /\w+/g;
    }
    render() {
        const { sql, data } = this.state;
        return (
            <Row>
                <Col sm={12} xs={12} md={2}>
                    <div className="pt-3 pl-3 pb-3 pr-3">
                        Options
                    </div>
                </Col>
                <Col sm={12} xs={12} md={10}>
                    <div className="pt-3 pl-3 pb-3 pr-3">
                        <Input
                            name="sql" type="textarea"
                            className="mb-3"
                            onChange={this.handleChange}
                        value={sql} rows={5} />
                        <Button color="primary">Enviar</Button>
                    </div>
                    <div className="pt-3 pl-3 pb-3 pr-3">
                        <Table data={data} />
                    </div>
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Databases);