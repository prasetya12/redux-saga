import Title from '../components/Title'
import ListNews from '../components/ListNews'

function Home(props){
    return(
        <div className="container mx-auto px-4">
            <Title/>
            <ListNews/>
        </div>
    )
}


export default Home