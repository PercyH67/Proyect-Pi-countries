import { useDispatch, useSelector } from "react-redux";
import { nexPaginate, prevPaginate, handleNumber } from "../../Redux/Actions";
import styles from "./Paginate.module.css"

const Paginate = ({cantPaginate}) =>{

    const { numPaginate } = useSelector(state => state)
    const dispatch = useDispatch()

    const prev = () =>{
        dispatch(prevPaginate())
    }
    const next = () =>{
        dispatch(nexPaginate())
    }
    const number = (num) =>{
        dispatch(handleNumber(num))
    }
    
    


    return(
        <div className={styles.container} >
            <div>
                 {numPaginate > 1 ? (
                <div>
                    <button onClick={prev}>Anterior</button>
                </div>
            ) : null}

            </div>
                <p>{numPaginate - 1}</p>
                <h3>{numPaginate}</h3>
                <p>{numPaginate + 1}</p>        
            <div>
                {numPaginate < cantPaginate ? (
                    <div>      
                        <button onClick={next}>Siguiente</button>
                    </div>
            ) : null} 
            </div>
            <p>{number}</p>      
        </div>
    )
}

export default Paginate;