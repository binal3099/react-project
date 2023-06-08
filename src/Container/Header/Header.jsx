import Logo from "../../Component/Logo/Logo";
import NavList from "../../Component/NavList/NavList";
import Button from "../../Component/Button/Button";
import { useState } from "react";
import Useeffect from "../../Component/Useeffect/Useeffect";

function Header(){

    const [chng, setchng] = useState(true);

    const change = () =>{
        setchng(false);
    }

    return(

        // <header>
        //     <div className="container">
        //         <div className="row">
        //             <Logo />
        //             <NavList />
        //             <Button />

        //         </div>
        //     </div>
        // </header>
       <div>

        {
            chng ? <Useeffect /> : <NavList />
        }

        <button onClick={change}>Change</button>
       </div>
       
    )
}
export default Header;