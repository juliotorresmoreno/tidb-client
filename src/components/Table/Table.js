import React, { PureComponent } from 'react';
import { Table as TableBT } from 'reactstrap';

export default class Table extends PureComponent {
    static defaultProps = {
        data: []
    }
    renderHead = () => {
        const { data } = this.props;
        let jsx = [];
        for (const key in data[0]) {
            if (data[0].hasOwnProperty(key))
                jsx.push(
                    <th key={key}>{key}</th>
                );
        }
        return jsx;
    }

    renderCell = (data) => {
        let jsx = [];
        for (const key in data) {
            if (data.hasOwnProperty(key))
                jsx.push(
                    <td key={key}>{data[key]}</td>
                );
        }
        return jsx;
    }

    render() {
        const { data } = this.props;
        if (!Array.isArray(data) || data.length === 0) {
            return false;
        }
        return (
            <TableBT bordered inverse striped>
                <thead>
                    <tr>
                        {this.renderHead()}
                    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => (
                        <tr key={i}>
                            {this.renderCell(v)}
                        </tr>
                    ))}
                </tbody>
            </TableBT>
        );
    }
}
