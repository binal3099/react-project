import Li from "../Li/Li";

let ulstyle = {display: "flex"};
let listyle ={listStyle: "none"};
let astyle = {textDecoration: "none", color: "blue", fontSize: 18, padding: 10};
let namelist = ["Home", "About", "Courses", "Page", "Blog", "Shop"];

function List (){

    return(
        <ul style ={ulstyle}>
            {
                namelist.map((val)=>{
                    return(
                        <Li ab={listyle} abc={astyle} name={val}/>
                    )
                })
            }
            
        </ul>
    )
}
export default List;