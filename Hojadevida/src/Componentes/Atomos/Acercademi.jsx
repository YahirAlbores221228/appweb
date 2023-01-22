import '../../assets/Styles/Acercademi.css'
import Diseño from "../../assets/img/diseño2.jpg"
import {data} from "../../Data/data"
function Acercademi() {
    return ( 
<div className='Container-mi'>
<h1 className='tile'>{data.Acercademi.title}</h1>
<hr />
<p>{data.Acercademi.Text}</p>
<img src={Diseño}/>
</div>
 );
}

export default Acercademi;