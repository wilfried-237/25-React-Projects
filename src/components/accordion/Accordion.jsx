import { useState } from "react";
import data from "./data.js";
import "./accordion.css";

function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiple, setEnableMultiple] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(currentId) {
        currentId === selected ? setSelected(null) : setSelected(currentId);
    }

    function handleMultipleSelection(currentId) {
        let copyMultiple = [...multiple];
        let findIndexOfCurrentId = copyMultiple.indexOf(currentId);

        if(findIndexOfCurrentId == -1){
            setMultiple(()=> [...copyMultiple, currentId])

        }else{
            copyMultiple = copyMultiple.splice(currentId, 1)
            setMultiple(copyMultiple)
        }   
    }

    return (
        <div className="wrapper" id="Accordion">
            <h1>Accordion</h1>
            <button onClick={() => setEnableMultiple(!enableMultiple)}>
                Enable Multiple Selection
            </button>
            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div className="item" key={dataItem.id}>
                        <div
                            className="question"
                            onClick={
                                enableMultiple
                                    ? () => handleMultipleSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                            }
                        >
                            <h3>{dataItem.question}</h3>
                            {selected === dataItem.id ? <span>-</span> : <span>+</span>}
                        </div>

                        {(enableMultiple? multiple.indexOf(dataItem.id) != -1 && (
                                <div>
                                    <p>{dataItem.answer}</p>
                                </div>
                            ) : selected === dataItem.id && (
                                <div>
                                    <p>{dataItem.answer}</p>
                                </div>
                            ))}
                    </div>
                ))
            ) : (
                <div>Data not found</div>
            )}
        </div>
    );
}

export default Accordion;
