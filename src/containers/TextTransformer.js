import { connect } from 'react-redux'
import TextTransformer from '../components/TextTransformer'
import { transformToLowerCase, transformToUpperCase } from '../store/textTransform'

const mapStateToProps = state => ({
    transformedValue: state.textTransform.transformedValue,
    isLoading: state.textTransform.isLoading,
    input: state.textTransform.input,
    hasError: !!state.textTransform.error
})

export default connect(mapStateToProps, { transformToLowerCase, transformToUpperCase })(TextTransformer)