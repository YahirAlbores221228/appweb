import {data} from "../../Data/data";
import '../../assets/Styles/Idioma.css'
function Idioma() {
    return (  
<div className="Containesidioma">
<h1 className="tile">{data.idiomas.title}</h1>
<hr />
<ul>
<li>{data.idiomas.idioma}</li>
<li>{data.idiomas.idioma2}</li>
</ul>
</div>
);
}

export default Idioma;