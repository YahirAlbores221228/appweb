import {data} from "../../Data/data";
import '../../assets/Styles/Educacion.css'
function Educacion() {
    return ( 
<div className="Container-educacion">
<h1 className="tile">{data.Educacion.title}</h1>
<hr /> 
<ul>
<li>{data.Educacion.año1}</li>
<p>{data.Educacion.area2}</p>
<li>{data.Educacion.año2}</li>
<p>{data.Educacion.area3}</p>
</ul>
</div>
);
}

export default Educacion;