import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" />
                    <button className={cx('clear')}>
                        <img src={images.close} alt="close-icon" />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <img src={images.search} alt="search-icon" />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    )
}

export default Header
