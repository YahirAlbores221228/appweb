import '../../assets/Styles/Sectionperfil.css'
import yahir from '../../assets/img/yahir.jpg'
import {data} from '../../Data/data.js'
function Header() {
    return ( 
<header className="left">
<img src={yahir} alt="" className='foto'/>
<h1 className='nombre'>{data.perfil.name}</h1>
<h4>{data.perfil.description}</h4>
<h5>{data.perfil.nacionalidad}</h5>
<h5>{data.perfil.edad}</h5>
</header>
 );
}
export default Header;