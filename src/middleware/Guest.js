import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticatedUser } from '../store'

export default function Guest(props) {
    const auth = useRecoilValue(authenticatedUser)
    const history = useHistory()

    if(auth.check){
        history.push('/')

    }
    return props.render
}
