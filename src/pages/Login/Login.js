import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {v4 as uuid} from "uuid";
import Styles from "./Login.module.scss";
import PasswordIcon from "../../assets/image/svg/password-solid.svg";
import EmailIcon from "../../assets/image/svg/email-regular.svg";
import isEmail from "validator/es/lib/isEmail";
import {validUser} from "../../data/data";

const Login = () => {
    const [formValue, setFormValue] = useState({email: '', password: ''});
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormValue({...formValue, [name]: value});
    }

    const isEmailValid = email => {
        if (!email) {
            setError('email is empty!')
            return;
        } else if (!isEmail(email)) {
            setError('email is incorrect!');
            return;
        }

        return true;
    }

    const isPasswordValid = password => {
        if (!password) {
            setError('password is empty');
            return;
        } else if (password.length < 8) {
            setError('password must be at least 8 characters');
            return;
        }

        return true;
    }

    const checkIsEqual = (obj1, obj2) => {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    const login = e => {
        e.preventDefault();

        if (isEmailValid(formValue.email) && isPasswordValid(formValue.password))
            setError('');
        else return;

        if (checkIsEqual(formValue, validUser)) {
            const token = uuid();
            sessionStorage.setItem('token', token);

            navigate('/home');
        } else alert('user dose not exist!');
    }

    return (
        <div className={Styles.form_wrap}>
            <form onSubmit={login}>
                <h2>Welcome to Lion Blog</h2>
                <div className={Styles.inputs}>
                    <div className={Styles.input}>
                        <input
                            name="email"
                            type="text"
                            placeholder="email"
                            value={formValue.email}
                            onChange={handleChange}/>
                        <img src={EmailIcon} alt="email-icon" />
                    </div>
                    <div className={Styles.input}>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={formValue.password}
                            onChange={handleChange}/>
                        <img src={PasswordIcon} alt="password-icon" />
                    </div>
                    {error && <div className="error">{error}</div>}
                </div>
                <button type="submit">login</button>
                <div className={Styles.angle}/>
            </form>
            <div className={Styles.background}/>
        </div>
    );
}

export default Login;