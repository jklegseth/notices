import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/Button.css'
import '../styles/TextTransformer.css'

export default class TextTransformer extends Component {
    state = {
        currentValue: ''
    }

    static propTypes = {
        mode: PropTypes.oneOf(['lower', 'upper']),
        transformToLowerCase: PropTypes.func.isRequired,
        transformToUpperCase: PropTypes.func.isRequired,
        transformedValue: PropTypes.string
    }

    handleChange = e => this.setState({ currentValue: e.target.value })

    handleSubmit = e => {
        const { transformToLowerCase, transformToUpperCase, mode } = this.props
        const { currentValue } = this.state
        const action = mode === 'upper' ? transformToUpperCase : transformToLowerCase
        e.preventDefault()
        action(currentValue)
    }

    render() {
        const { currentValue } = this.state
        const { transformedValue } = this.props
        return (
            <div className="TextTransformer-container">
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        label="Enter text to transform"
                        value={currentValue}
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth={true}
                        type="text"
                    />
                    <Button type="submit" variant="contained" className="button button--primary">
                        Transform Text
                    </Button>
                </form>
                { transformedValue && (
                    <p>
                        <span className="text-muted">Transformed Text: </span>
                        <span className="text-emphasized">{transformedValue}</span>
                    </p>
                )}
            </div>
        )
    }
}