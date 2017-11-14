import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Toolbar from './Toolbar';

export default class Admin extends PureComponent {
    render() {
        return [
            <Toolbar key={0} {...this.props} />,
            <main key={1}>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </main>
        ]
    }
}
