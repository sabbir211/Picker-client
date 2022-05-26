import axios from 'axios';
import React from 'react';

const CancelModal = ({refetch,orderDelete}) => {
   const handleDelete=(id)=>{
    axios.delete(`http://localhost:5000/orders/${id}`)
    .then(res=>{console.log(res.data)
    if(res.data.deletedCount>0){
        refetch()
    }
    })
    console.log(id);
   }
    return (

        <div>
            {/* <!-- The button to open modal --> */}

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure!</h3>
                    <p className="py-4">If you confirm cancel it con not be un done</p>
                    <div className="modal-action">
                        <label htmlFor="cancel-modal" className="btn btn-primary">Cancel</label>
                        <label htmlFor="cancel-modal" className="btn bg-red-500" onClick={()=>handleDelete(orderDelete._id)}>Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CancelModal;