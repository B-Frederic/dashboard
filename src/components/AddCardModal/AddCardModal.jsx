import React from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import css from "./AddCardModal.module.css"


const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
    
    const [title, setTitle] = React.useState('');
    const [detail, setDetail] = React.useState('');
    
    const customStyles = {
        height: "fit-content",
        width: "50%",
        top: "-3rem",
        padding: "20px",
        background: "rgb(58 58 58)",
    }
    

    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
            <div className={css.container}>
                <div>
                    <span className={css.label}>Card Title</span>
                    <input type="text" className={css.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <span className={css.label}>Detail</span>
                    <textarea
                    rows={10} className={css.input} value={detail}
                    type="text" onChange={(e) => setDetail(e.target.value)} 
                    />
                </div>

                <button 
                disabled={title=== "" && detail === ""}
                className={css.saveButton}
                onClick={()=> {
                    handleCardAdd(title, detail)
                    setDetail("")
                    setTitle("")
                }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    )
}

export default AddCardModal