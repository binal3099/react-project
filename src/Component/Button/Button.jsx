function Button(){

    return(
        <div style={{display:"flex", alignItems: "center"}}>
            <div className="search">
             <img src="public/search.png" alt="" />
            </div>
            <a className="buttonBtn">Login/Register</a>
        </div>
    )
}
export default Button;