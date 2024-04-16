import nlwUniteIcon from '../assets/nlw-unite-icon.svg';
import {NavLink} from "./nav-link.tsx";

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwUniteIcon}/>

            <nav className="flex items-center gap-5">
                <NavLink  title="Eventos" href="/eventos">Eventos</NavLink>
                <NavLink  title="Participantes" href="/paticipantes">Participantes</NavLink>

            </nav>
        </div>
    )
}