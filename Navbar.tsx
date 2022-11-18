import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className='nav'>
            <ul>
            <li><Link to='/'>Bar</Link></li>
            <li><Link to='/Line'>Line</Link></li>
            <li><Link to='/Pie'>Pie</Link></li>
            <li><Link to='/Bubble'>Bubble</Link></li>
            <li><Link to='/Group'>Group</Link></li>
            <li><Link to='/GroupErr'>GroupErr</Link></li>
            </ul>
        </nav>
)
}

export default Navbar