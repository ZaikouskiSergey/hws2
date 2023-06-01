import s from './Loader.module.css'
import preloader_10hw from '../../image/preloader_10hw.svg'

export const Loader = () => {
    return (<div className={s.loader}>
        <img src={preloader_10hw} alt="loading"/>
    </div>)
}
