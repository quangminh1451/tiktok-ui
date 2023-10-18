import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://picsum.photos/40" alt="username" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Pham Quang Minh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>quangminh2451</span>
            </div>
        </div>
    )
}

export default AccountItem
