
import React, { PureComponent } from 'react';
import { Editor, EditorState, CompositeDecorator } from 'draft-js';
import PropTypes from 'prop-types';

const customStyles = {
    textarea: {
        border: '1px solid gray',
        font: 'medium -moz-fixed',
        minHeight: '100px',
        overflow: 'vertical',
        padding: '10px',
        resize: 'vertical',
        width: '100%'
    }
}

const COLOR_REGEX = /(\s|^)(select|from|inner|join|right|left|outer|insert|update|delete)(\s|$)/g;
function colorStrategy(contentBlock, callback) {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = COLOR_REGEX.exec(text)) !== null) {
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
    }
}

const ColorComponent = (props) => {
    return (
        <span style={{ color: '#cb4335' }}>{props.children}</span>
    );
};

const decorators = new CompositeDecorator([{
    strategy: colorStrategy,
    component: ColorComponent,
}]);

const colorPlugin = {
    decorators: [{
        strategy: colorStrategy,
        component: ColorComponent,
    }],
};

export default class HighLight extends PureComponent {

    static propTypes = {

    }

    state = {
        editorState: EditorState.createEmpty(decorators),
        value: ''
    }

    handleChange = (editorState) => this.setState({
        editorState: editorState
    });

    render = () => (
        <Editor
            contentEditor
            plugins={[colorPlugin]}
            editorState={this.state.editorState}
            onChange={this.handleChange} />
    );
}

/*
<div
style={customStyles.textarea}
onChange={this.handleChange}
contentEditable>{this.state.value}</div>
*/