import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TextTransformer from '../components/TextTransformer'
import { transformToLowerCase, transformToUpperCase } from '../store/textTransform'

class TextTransformerContainer extends React.Component {
    componentWillUnmount() {
        // need to clear this or it persists to the other transform page
        this.props.dispatch({ type: 'TRANSFORM_VALUE_RESET' })
        // this belongs at the App level on route change
        this.props.dispatch({ type: 'HIDE_TOAST' })
    }

    render() {
        return (
            <TextTransformer { ...this.props } />
        )
    }
}

const mapStateToProps = state => ({
    transformedValue: state.textTransform.transformedValue,
    isLoading: state.textTransform.isLoading,
    input: state.textTransform.input,
    hasError: !!state.textTransform.error
})

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({ transformToLowerCase, transformToUpperCase }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextTransformerContainer)