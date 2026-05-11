import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: '#333',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</Link>
            <Link to="/profile" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Profile</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About Us</Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</Link>
        </nav>
    )
}

export default Navbar;
