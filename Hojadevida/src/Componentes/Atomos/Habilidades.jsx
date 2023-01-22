import {data} from "../../Data/data";
import '../../assets/Styles/Habilidades.css'
function Habilidades() {
    return ( 
<div className="Container-habilidades">
<h1 className="tile">{data.Habilidades.title}</h1>
<hr />
<ul>
<li>{data.Habilidades.texto1}</li>
<li>{data.Habilidades.texto2}</li>
<li>{data.Habilidades.texto3}</li>
</ul>
</div>
 );
}

export default Habilidades;