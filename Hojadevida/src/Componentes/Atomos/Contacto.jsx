import {data} from "../../Data/data";
import '../../assets/Styles/footer.css'
import colegio from "../../assets/img/colegio.png";
import correo from "../../assets/img/correo.png"
import casa from "../../assets/img/hogar.png"
import telefono from "../../assets/img/telefono.png"
function Contacto() {
    return ( 
<footer>
<div className="escuela">
<img className="escue" src={colegio} alt="" />
<h4>{data.contacto.escuela}</h4>
</div>
<div className="correo">
<img className="corre" src={correo} alt="" />
<h4>{data.contacto.correo}</h4>
</div>
<div className="domicilio">
<img className="domici" src={casa} alt="" />
<h4>{data.contacto.domicilio}</h4>
</div>
<div className="telefono">
<img className="tele" src={telefono} alt="" />
<h4>{data.contacto.telefono}</h4>
</div>
</footer>
 );
}

export default Contacto;