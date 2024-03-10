import hearts from '../../images/hearts.png';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__thanks">
                <div className="image">
                    <img className="image-item" src={hearts} alt="hearts" />
                </div>
                <p className='thankstext'>thank you for using my app</p>
            </div>
            <div className="footer__link">
                <p className='describing-link'>my github</p>
                <div className="link"></div>
            </div>
        </footer>
    )
}