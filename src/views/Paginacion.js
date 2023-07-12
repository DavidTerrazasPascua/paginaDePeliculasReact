export default function Paginacion(props){
    
    const getPaginas=()=>{
        let result=[];
        for(let i=1 ; i<= props.total ; i++){
           result.push(<a onClick={ () => props.onChange(i)} 
            className={ props.pagina === i ? "active" : ""} >{i}</a>);
        }
        return result;
    }
    
    return (<div className="topbar-filter">
    <label>Movies per page:</label>
    
    <div className="pagination2">
        <span>Pagina {props.pagina} of {props.total}:</span>
        {getPaginas()}
        
    </div>
</div>);
}