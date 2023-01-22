import {data} from "../../Data/data";
import '../../assets/Styles/Experiencia.css'
function Experiencia() {
    return ( 
<section className="Container-experiencia">
<h1 className="tile">{data.Experiencia.title}</h1>
<hr />
<ul>
<li>{data.Experiencia.año}</li>
<p>{data.Experiencia.description}</p>
<li>{data.Experiencia.año2}</li>
<p>{data.Experiencia.description2}</p>
</ul>
</section>
 );
}

export default Experiencia;