import React, { PureComponent } from 'react'
import Admin from '../../components/Admin/Admin';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import '../../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Admin />
                </BrowserRouter>
            </Provider>
        )
    }
}
