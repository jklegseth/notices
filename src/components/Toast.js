import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import '../styles/Snackbar.css'

const styles = theme => ({
    close: {
      padding: theme.spacing.unit / 2,
    },
});

export class Toast extends React.Component {
    state = {
        open: true,
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
        toast: PropTypes.object.isRequired
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        this.setState({ open: false });
    };

    componentWillReceiveProps() {
        this.setState({ open: true })
    }

    render() {
        const { classes } = this.props;

        // Is this an anti-pattern? Not sure how we conditionally render
        // a component when using the container+component structure.
        if (!this.props.toast.message) {
            return null;
        }

        return (
            <div className="Toast-container">
                <div>
                    <Snackbar
                        className={this.props.toast.type}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.open}
                        autoHideDuration={4000}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.props.toast.message}</span>}
                        action={[
                            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                                DISMISS
                            </Button>,
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                className={classes.close}
                                onClick={this.handleClose}
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                    />
                </div>
            </div>
        )
    }
}
  
export default withStyles(styles)(Toast);