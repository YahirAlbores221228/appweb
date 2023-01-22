import {data} from "../../Data/data";
import '../../assets/Styles/Actitudes.css'
import diseño from '../../assets/img/diseño.jpg'
function Aptitup() {
    return ( 
<div className="Container-Aptitud">
<h1 className="tile">{data.Aptitudes.title}</h1>
<hr/>
<ul>
<li>{data.Aptitudes.Aptitud1}</li>
<li>{data.Aptitudes.Aptitud2}</li>
</ul>
<img src={diseño} alt=""  className="foto2"/>
</div>
 );
}

export default Aptitup;