import Styles from "./CreateBlog.module.scss";
import {useState, useContext} from "react";
import AppContext from "../../AppContext";
import Select from "react-select";
import {subjects, tags} from "../../data/data";
import {v4 as uuid} from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from "react-router-dom";

const CreateBlog = () => {
    const [error, setError] = useState('');
    const [formValue, setFormValue] = useState({
        title: '',
        description: '',
        payment: false,
    });
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedDay, setSelectedDay] = useState(new Date().getTime());
    const [image, setImage] = useState('');

    const {
        updateBlogs
    } = useContext(AppContext);

    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const { name, value, type, checked } = target;
        const newValue = type === "checkbox" ? checked : value;

        setFormValue({...formValue, [name]: newValue});
    }

    const onSubjectChange = input => {
        setSelectedSubject(input.value);
    }

    const onTagsChange = input => {
        setSelectedTags([...input]);
    }

    const onSelectedTimeChange = date => {
        setSelectedDay(new Date(date).getTime());
    }

    const onFileChange = ({ target }) => {
        const path = URL.createObjectURL(target.files[0]);

        setImage(path);
    }

    const getData = ({formValue, image, selectedDay, selectedTags, selectedSubject }) => {
        const { title, description,payment } = formValue;

        return {
            id: uuid(),
            title,
            description,
            payment,
            image,
            date: selectedDay,
            tags: selectedTags,
            subject: selectedSubject
        }
    }

    const publishBlog = e => {
        e.preventDefault();

        if (!formValue.title || !formValue.description || !image || !selectedSubject || !selectedTags.length) {
            setError('All inputs must be filled!')
            return;
        }

        setError('');

        const data = getData({formValue, image, selectedDay, selectedTags, selectedSubject});

        updateBlogs(data);

        navigate('/blog');
    }

    return (
        <div className="container">
            <form className={Styles.form} onSubmit={publishBlog}>
                <div className={Styles.form_heading}>
                    <h2>Create your own blog</h2>
                    <input
                        className={Styles.file}
                        onChange={onFileChange}
                        type="file"
                        accept=".png, .jpg, ,jpeg"/>
                    <div className={Styles.toggle}>
                        <p>{formValue.payment ? 'member-only' : 'free'}</p>
                        <label>
                            <input
                                name="payment"
                                value={formValue.payment}
                                onChange={handleChange}
                                type="checkbox"/>
                                <span className={Styles.slider}/>
                        </label>
                    </div>
                </div>
                <div className="divider" />
                <div className={Styles.inputs}>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={formValue.title}
                        onChange={handleChange}
                        placeholder="type title"/>
                </div>
                <div className={Styles.inputs}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="description"
                        placeholder="type content"
                        value={formValue.description}
                        onChange={handleChange}/>
                </div>
                <div className={Styles.inputs}>
                    <label htmlFor="subject">Subject</label>
                    <Select
                        id="subject"
                        className={Styles.select}
                        placeholder="select subject"
                        options={subjects}
                        isSearchable={true}
                        onChange={onSubjectChange}
                        defaultValue={selectedSubject}/>
                </div>
                <div className={Styles.inputs}>
                    <label htmlFor="tag">Tags</label>
                    <Select
                        id="tag"
                        isMulti
                        className={Styles.select}
                        placeholder="select tags"
                        options={tags}
                        isSearchable={true}
                        onChange={onTagsChange}/>
                </div>
                <div className={Styles.inputs}>
                    <label htmlFor="date">Date</label>
                    <DatePicker
                        id="date"
                        onChange={onSelectedTimeChange}
                        selected={selectedDay}/>
                </div>
                {error && <div className="error">{error}</div>}
                <div className={Styles.form_footer}>
                    <button type="submit">Publish</button>
                </div>
            </form>
        </div>
    );
}

export default CreateBlog;