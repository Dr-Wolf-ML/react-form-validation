import React from 'react';
import Typography from '@material-ui/core/Typography';

const Message = (props) => {
    const message = props.validation && props.submitted ?
        'Form has been submitted...' :
        props.validation ?
            'Valid Form - ready to submit?' : '';

    const style = props.submitted ? {color: "green"} : null;

    return <Typography className="Message" variant="h6" style={style}>{message}</Typography>;
}

export default Message;
