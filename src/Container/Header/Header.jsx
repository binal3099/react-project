import Logo from "../../Component/Logo/Logo";
import NavList from "../../Component/NavList/NavList";
import Button from "../../Component/Button/Button";
function Header(){

    return(

        <header>
            <div className="container">
                <div className="row">
                    <Logo />
                    <NavList />
                    <Button />
                </div>
            </div>
        </header>
    )
}
export default Header;