const NavbarComponent = (props) => {

const Register = () => {
        
    props.visible();
}

const LogIn = () => {

    props.visible();
}



return (
    
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    Repertoire
                </a>
                <div className="">
                    <button className="btn btn-outline-primary mx-2" onClick={LogIn}>Log-in</button>
                    <button className="btn btn-outline-primary mx-2" onClick={Register}>Register</button>
                </div>
            </div>
        </nav>
    </header>
    
)
}

export default NavbarComponent