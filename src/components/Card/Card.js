import Styles from "./Card.module.scss";
import CalenderIcon from "../../assets/image/svg/calendar-svgrepo.svg";
import StarIcon from "../../assets/image/svg/star-svgrepo-com.svg";
import TagIcon from "../../assets/image/svg/tag-svgrepo-com.svg";

const Card = ({ blog }) => {
    const formatDate = date => {
        return new Date(date).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        });
    }

    return (
        <div className={Styles.card}>
            <div className={Styles.card_img}>
                <img src={blog.image} alt="cover" />
                {blog.payment && <img className={Styles.icon} src={StarIcon} alt="star-icon"/>}
            </div>
            <div className={Styles.card_content}>
                <h1>{ blog.title }</h1>
                <div className={Styles.card_info}>
                    <div className={Styles.card_info_heading}>
                        <h4>{ blog.subject }</h4>
                    </div>
                    <div className={Styles.card_info_heading}>
                        <img src={CalenderIcon} alt="calender-icon"/>
                        <p className="date">{ formatDate(blog.date) }</p>
                    </div>
                </div>
                <div className={Styles.card_description}>
                    <p>{ blog.description }</p>
                </div>
                <div className={Styles.card_footer}>
                    <img src={TagIcon} alt="tag-icon" />
                    {blog.tags.map((tag, index) => (
                        <p key={index}>#{tag.label}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;