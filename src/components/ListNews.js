import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import './ListNews.scss'
import {list} from '../redux/action/newsAction'
import CardNews from '../components/CardNews'

function ListNews(props){
    const dispatch = useDispatch()
    const listNews = ()=>dispatch(list())
    const news = useSelector(state => state)
    console.log(news)

    useEffect(() => {
        listNews()
    },[])

    return(
        <div className="container-list">
            <CardNews/>
        </div>
    )
}

export default ListNews