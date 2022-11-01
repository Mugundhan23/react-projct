import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div className='nav'>
            <Link to="/"><h1>BreakFast</h1></Link>
            <Link to="/lunch"><h1>Lunch</h1></Link>
            <Link to="/dinner"><h1>Dinner</h1></Link>
        </div>
    )
}
export default Nav