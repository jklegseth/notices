import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import '../styles/Snackbar.css'

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2
    },
    success: {
        backgroundColor: '#43a047'
    },
    error: {
        backgroundColor: '#d32f2f'
    },
    info: {
        backgroundColor: '#1976d2n'
    },
    warning: {
        backgroundColor: '#ffa000'
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit / 2
    },
    message: {
        display: 'flex',
        alignItems: 'center'
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

        // material-ui has another way to do this, I opted to do it manually for now
        // see https://material-ui.com/components/snackbars/
        function setIcon(type) {
            const iconClasses = `${classes.icon} ${classes.iconVariant}`;
            switch (type) {
                case 'success':
                    return <CheckCircleIcon className={iconClasses} />
                case 'error':
                    return <ErrorIcon className={iconClasses} />
                case 'info':
                    return <InfoIcon className={iconClasses} />
                case 'warning':
                    return <WarningIcon className={iconClasses} />
                default:
                    return null;
            }
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
                        message={<span id="message-id" className={classes.message}>
                            {setIcon(this.props.toast.type)} {this.props.toast.message}
                        </span>}
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
                                <CloseIcon className={classes.close} />
                            </IconButton>,
                        ]}
                    />
                </div>
            </div>
        )
    }
}
  
export default withStyles(styles)(Toast);