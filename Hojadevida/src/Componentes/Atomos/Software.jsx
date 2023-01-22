import {data} from "../../Data/data";
import '../../assets/Styles/Software.css'
function Software() {
    return ( 
<section className="Container-software">
<h1 className="tile">{data.software.title}</h1>
<hr />
<ul>
<li>{data.software.softw1}</li>
<li>{data.software.softw2}</li>
<li>{data.software.softw3}</li>
<li>{data.software.softw4}</li>
</ul>
</section>
 );
}

export default Software;