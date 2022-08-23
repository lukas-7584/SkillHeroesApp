import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import logo from '../../../public/logo.svg'


export const Navbar = () => {

    const navigate = useNavigate();

    const { user, logout} =useContext(AuthContext)

    const isActive = ( {isActive} ) =>`nav-item nav-link ${ isActive ? 'active' : ''}` 

    const onLogout = () =>{

    logout();
    
        navigate('/login', {
            replace: true,
        });

    }

    return (

        <div  className='animate__animated animate__lightSpeedInRight'>
        <nav className="navbar navbar-expand-lg bg-primary mb-5">
            <div className="container-fluid">
            <Link to='/'>
                <img src={logo} width='80px' />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item navTitulo">
                    <Link className="navbar-brand colorSpan titulos" to="/">
                    HeroesApp
                    </Link>
                </li>
                <li className="nav-item navTitulo">
                    <Link className="navbar-brand colorSpan titulos" to='/marvel'>
                    Marvel Comic
                    </Link>
                </li>
                <li className="nav-item navTitulo">
                    <Link className="navbar-brand colorSpan titulos" to='/dc'>
                        DC
                    </Link>
                </li>
                <li className="nav-item navTitulo">
                    <Link className="navbar-brand colorSpan titulos" to='/search'>
                        Search
                    </Link>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto ">
                    <span className="nav-item nav-link colorSpan ">{user?.username}</span>
                    < button 
                        className=" btn btn-dark"
                        onClick={onLogout}
                        >
                            LOGOUT
                            
                            </button>
                </ul>
                </div>
            </div>
        </nav>
    </div>



        // <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
        //     <Link 
        //         className="navbar-brand" 
        //         to="/"
        //     >
        //         HeroesApp
        //     </Link>

        //     <div className="navbar-collapse">
        //         <div className="navbar-nav">

        //             <NavLink 
        //                 className={ isActive } 
        //                 to="/marvel"
        //             >
        //                 Marvel
        //             </NavLink>

        //             <NavLink 
        //                 className={ isActive} 
        //                 to="/dc"
        //             >
        //                 DC
        //             </NavLink>

        //             <NavLink 
        //                 className={ isActive} 
        //                 to="/search"
        //             >
        //                 Search
        //             </NavLink>
        //         </div>
        //     </div>

        //     <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                // <ul className="navbar-nav ml-auto">
                //     <span className="nav-item nav-link text-primary">{user?.username}</span>
                //     < button 
                //         className=" btn nav-item nav-link"
                //         onClick={onLogout}
                //         >
                //             LOGOUT
                            
                //             </button>
                // </ul>
        //     </div>
        // </nav>
    )
}