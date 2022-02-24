import React from 'react';

function Image(props) {
  return (<>
      <img className="containtsImg m-1" src={props.src} data-bs-toggle="modal" data-bs-target={"#"+props.imageId} alt=''/>
      {/* Button trigger modal 
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>*/}
      {/* Modal */}
      <div className="modal fade" id={props.imageId} tabIndex={-1} aria-labelledby={props.imageId+"Lable"} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title" id={props.imageId+"Lable"}>{props.imageId}</h5> */}
              <div className="modal-title">
                <div className="top-container"> <img src={props.profileImg} className="profile-image mx-2" style={{width:"50px"}} alt=''/>
                  <div className="ml-3">
                    <h5 className="name">{props.fname}</h5>
                    <p className="mail">@{props.uname}</p>
                  </div>
                </div>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
            <img src={props.modalImgUrl} className="containtsImg" alt=''/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a download href={props.saveAs+"&force=true"} type="button" className="btn btn-primary">Save As</a>
            </div>
          </div>
        </div>
      </div>
  </>);
}

export default Image;