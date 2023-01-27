import { level } from '../../helpers/calc'
import styles from './results.module.css'


type Props = {
    item: level
}

export const Result = ({item}: Props) => {
    return(
        <div className={styles.main}>
            <p style={{color: item.color}}>{item.classification}</p>

            <div>{item.yourIMC}</div>
        </div>
    )
}