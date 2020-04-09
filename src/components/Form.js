import React, { useGlobal } from 'reactn';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { TextField, styled } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Message from './Message';
import validateField from "./helpers/validateField";
import {ApprovalIcon} from './ApprovalIcon';
import defaultGlobalState from "../defaultGlobalState";

const InputField = styled(TextField)({
    margin: '5px',
    padding: '0px',
    width: "90%"
});

const Form = () => {

    const [global, setGlobal] = useGlobal();

    const formIsValid = global.nameIsValid && global.emailIsValid && global.phoneIsValid && global.urlIsValid;

    const handleInputChange = (e, fieldKey, validationKey) => {
        e.preventDefault();
        setGlobal({[fieldKey]: e.target.value}).then();
        setGlobal({[validationKey]: validateField(fieldKey, global[fieldKey])}).then();
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submit Clicked!');
        setGlobal({submitted: true}).then();
        setTimeout(() => {
            setGlobal(defaultGlobalState).then();
        }, 3000);
    };

    const SubmitButton = () => {
        const color = global.submitted ? 'default' : 'primary';

        return (
            <Button
                variant="contained"
                color={color}
                disabled={!formIsValid}
                onClick={e => handleSubmit(e)}
            >
                Submit
            </Button>
        );
    };

    return (
    <Container maxWidth="sm">
        <div className="Main" >
            <Typography className="Title" variant="h5">
                Form Validation
            </Typography>
            <InputField
                required
                type='text'
                label='Name'
                placeholder='John Doe'
                onChange={e => handleInputChange(e, 'name', 'nameIsValid')}
                variant='outlined'
                value={global.name}
                error={!global.nameIsValid && global.name.length > 3}
                helperText={(!global.nameIsValid && global.name.length > 3) ?
                    'Invalid Entry - letters only, please.' :
                    ' '
                }
            />
            <ApprovalIcon fieldKey="name" validationKey="nameIsValid" minLength="3" />
            <br />
            <InputField
                required
                type='text'
                label='Email'
                placeholder='john@doe.com'
                onChange={e => handleInputChange(e, 'email', 'emailIsValid')}
                variant='outlined'
                value={global.email}
                error={!global.emailIsValid && global.email.length > 5}
                helperText={(!global.emailIsValid && global.email.length > 5) ?
                    'Invalid Entry - please use email format' :
                    ' '
                }
            />
            <ApprovalIcon fieldKey="email" validationKey="emailIsValid" minLength="6" />
            <br />
            <InputField
                required
                type='text'
                label='Phone'
                placeholder='0123456789'
                onChange={e => handleInputChange(e, 'phone', 'phoneIsValid')}
                variant='outlined'
                value={global.phone}
                error={!global.phoneIsValid && global.phone.length > 9}
                helperText={(!global.phoneIsValid && global.phone.length > 9) ?
                    'Invalid Entry - 10 numbers please (spaces optional)' :
                    ' '
                }
            />
            <ApprovalIcon fieldKey="phone" validationKey="phoneIsValid" minLength="10" />
            <br />
            <InputField
                required
                type='text'
                label='URL'
                placeholder='www.john-doe.com'
                onChange={e => handleInputChange(e, 'url', 'urlIsValid')}
                variant='outlined'
                value={global.url}
                error={!global.urlIsValid && global.url.length > 6}
                helperText={(!global.urlIsValid && global.url.length > 6) ?
                    'Invalid Entry - a valid URL, please (http://... or www...)' :
                    ' '
                }
            />
            <ApprovalIcon fieldKey="url" validationKey="urlIsValid" minLength="7" />
            <br />
            <div className="SubmitPanel">
                <SubmitButton
                    className="SubmitButton"
                />
                <Message
                    validation={formIsValid}
                    submitted={global.submitted}
                />
            </div>
        </div>
    </Container>
    );
};

export default Form;
