import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}>
                <img src={'img/civitas-logo.svg'} alt={'Civitas Logo'} />
            </Link>

            <ul>
                <li>
                    <NavLink to={'/1'}>
                        NavLink1
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/2'}>
                        NavLink2
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/3'}>
                        NavLink3
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}