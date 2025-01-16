import { useState } from "react";
import { FaCcVisa } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import users from "../JSON/users.json";
import "./Style/VisaComponent.scss";

function VisaComponent() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const handleSelectChange = (e) => {
    const userId = parseInt(e.target.value, 10);
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
  };

  return (
    <div className="main-visa-component-container">
      <div className="visa-header">
        <div className="visa-name-title">
          <FaCcVisa className="visa-icon" />
          <select className="select-user" onChange={handleSelectChange}>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="arrow-icon">
          <IoIosArrowUp className="arrow" />
          <IoIosArrowDown className="arrow" />
        </div>
      </div>
      {selectedUser && (
        <>
          <div className="visa-body">
            <div className="visa-body-header">
              <div className="visa-icon-item">
                <RiVisaLine className="visa-icon-body" />
              </div>
              <p className="visa-body-title-number">
                {selectedUser.Card_number}
              </p>
              <div className="body-details">
                <div>
                  <h5 className="details-title">Cardholder</h5>
                  <h4 className="details-desc">{selectedUser.name}</h4>
                </div>
                <div>
                  <h5 className="details-title">Expiry date</h5>
                  <h4 className="details-desc">{selectedUser.expiration}</h4>
                </div>
                <div>
                  <h5 className="details-title">CVC</h5>
                  <h4 className="details-desc">{selectedUser.cvv}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="visa-details-container">
            <div className="details-item">
              <h4 className="details-item-title">Card number</h4>
              <h4 className="details-item-desc">{selectedUser.Card_number}</h4>
            </div>
            <div className="details-item">
              <h4 className="details-item-title">CCV</h4>
              <h4 className="details-item-desc">{selectedUser.cvv}</h4>
            </div>
            <div className="details-item">
              <h4 className="details-item-title">Expiration</h4>
              <h4 className="details-item-desc">{selectedUser.expiration}</h4>
            </div>
            <div className="details-item">
              <h4 className="details-item-title">Brand</h4>
              <h4 className="details-item-desc brand">
                {selectedUser.brand}
                <FaCcVisa fontSize={20} style={{ marginLeft: "5px" }} />
              </h4>
            </div>
            <div className="details-item">
              <h4 className="details-item-title">Status</h4>
              <h4 className="details-item-desc active">
                {selectedUser.status}
              </h4>
            </div>
            <div className="details-item">
              <h4 className="details-item-title">Cardholder</h4>
              <h4 className="details-item-desc">{selectedUser.name}</h4>
            </div>
            <div className="details-item">
              <h4 className="details-item-title">Card type</h4>
              <h4 className="details-item-desc">{selectedUser.cardType}</h4>
            </div>
            <div className="details-item">
              <h4 className="details-item-title">Created at</h4>
              <h4 className="details-item-desc">{selectedUser.createdAt}</h4>
            </div>
            <div className="details-item">
              <h4 className="details-item-title">Billing address</h4>
              <h4 className="details-item-desc">
                <span>{selectedUser.billing_address}</span>
                <span>{selectedUser.billing_address2}</span>
              </h4>
            </div>
          </div>
        </>
      )}
      <div className="main-btn-container">
        <button className="btn-item">Freeze card</button>
        <button className="btn-item">Replace card</button>
        <button className="btn-item">Cancel card</button>
      </div>
    </div>
  );
}

export default VisaComponent;
