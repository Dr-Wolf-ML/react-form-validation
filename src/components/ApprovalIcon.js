import React, { useGlobal } from 'reactn';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export const ApprovalIcon = (props) => {
    const [global, setGlobal] = useGlobal();

    return global[props.validationKey] && global[props.fieldKey].length >= parseInt(props.minLength) ?
        <CheckCircleOutlineIcon
            className="Approval"
            fontSize="medium"
            style={{ color: "green" }}
        /> : null
}
