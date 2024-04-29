import style from "./Arrow.module.css"
function Arrow(){
    const anim = `fas fa-arrow-down-long ${style.arr}`
    return(
        <i className={anim}></i>
    )
}
export default Arrow