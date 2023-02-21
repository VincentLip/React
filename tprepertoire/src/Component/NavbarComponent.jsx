const NavbarComponent = (props) => {

const Register = () => {
        
    props.visible();
}



return (
    
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
            <div class="container-fluid">
                <a href="#" class="navbar-brand">
                    Repertoire
                </a>
                <div class="">
                    <button class="btn btn-outline-primary mx-2" >Log-in</button>
                    <button class="btn btn-outline-primary mx-2" onClick={Register}>Register</button>
                </div>
            </div>
        </nav>
    </header>
    
)
}

export default NavbarComponent