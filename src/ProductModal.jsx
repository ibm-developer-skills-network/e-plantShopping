import React from "react";

const ProductModal = ({ onConfirm, onCancel}) => {
    return (
        <div className="modal-wraper">
            <div className="modal-container">
                <div className="modal-item">
                    <h3 className="modal-titel">Are you sure you want to delete this item?</h3>
                </div>
                <div className="modal-item">
                    <button className="modal-btn" onClick={onConfirm}>Yes</button>
                    <button className="modal-btn-cancel" onClick={onCancel}>Cancel</button>
                </div>
                
            </div>
        </div>

    )
}

export default  ProductModal; 