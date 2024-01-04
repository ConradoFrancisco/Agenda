import './button.css'

// eslint-disable-next-line react/prop-types
export default function Button({children,color,onClick}){

    return(
        <div onClick={onClick} className="button" style={{display:'flex', justifyContent:'center',borderRadius:'5px',alignItems:'center', backgroundColor:color,padding:'10px',color:'white'}}>
            {children}
        </div>
    )
}