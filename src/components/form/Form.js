import React, {useState} from "react";
import "./form.css"

const genders = [
    {
        id: 1,
        name: "Male"
    },
    {
        id: 2,
        name: "Female"
    }
];

const Form = () => {
    const initialFormState = {email: '', password: '', gender: 'Male'};
    const initialValidateState = {email: true, password: true};

    const [data, setData] = useState(initialFormState);
    const [validation, setValidation] = useState(initialValidateState);

    const onHandleInputChange = event => {
        const {name, value} = event.currentTarget;
        setData({...data, [name]: value})
    };
    const onHandleSubmit = () => {
        let emailValid, passwordValid;
        for (let key in validation) {
            switch (key) {
                case 'email':
                    emailValid = data.email.match(/^...+@..+\...+$/) != null;
                    break;
                case 'password':
                    passwordValid = data.password.match(/^.{6,}$/) != null;
                    break;
                default:
                    break;
            }
        }
        setValidation({email: emailValid, password: passwordValid});
        if (emailValid && passwordValid) {
            alert('Success!!!');
            setData(initialFormState);
            setValidation(initialValidateState);
        }
    };

    const errors = [];
    if (!validation.email)
        errors.push(<p className='error'>You have entered a wrong format of email</p>);
    if (!validation.password)
        errors.push(<p className='error'>Your password is too short</p>);

    return (
        <div className='form'>
            <div className='form-header'>
                <h3>Sign Up</h3>
                <span>Want to sign up fill out this form</span>
            </div>
            {errors}
            <div className='user-input'>
                <label>Email</label>
                <input
                    className={!validation.email ? 'invalid' : null}
                    name='email'
                    type='text'
                    value={data.email}
                    onChange={onHandleInputChange}/>
            </div>
            <div className='user-input'>
                <label>Password</label>
                <input
                    className={!validation.password ? 'invalid' : null}
                    name='password'
                    type="password"
                    value={data.password}
                    onChange={onHandleInputChange}/>
            </div>
            <div className='user-input'>
                <label>Gender</label>
                <select
                    name="gender"
                    value={data.gender}
                    onChange={onHandleInputChange}>
                    {genders.map(gender => <option key={gender.id} value={gender.name}>{gender.name}</option>)}
                </select>
            </div>
            <button type='button'
                    className='sign-up-btn'
                    onClick={onHandleSubmit}>
                Sign Up
            </button>
        </div>
    );
};


export {Form};
