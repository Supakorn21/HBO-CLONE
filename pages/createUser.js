import Head from "next/head";
import Image from "next/image";

export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who is Watching?</span>
        </div>

        <div className="create-user__form">
          <img
            src="https://api.uifaces.co/our-content/donated/FJkauyEa.jpg"
            className="create-user__user-img"
          />
          <div className="create-user__input-group">
            <label>Name</label>
            <input type="text" className="create-user__inputText" />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(0deg, rgba(45,253,239,1) 0%, rgba(45,34,195,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(135deg, rgba(213,108,185,1) 0%, rgba(189,64,73,1) 78%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(0deg, rgba(45,253,139,1) 0%, rgba(34,195,166,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(0deg, rgba(253,170,45,1) 0%, rgba(187,195,34,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(0deg, rgba(253,69,45,1) 0%, rgba(195,98,34,1) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  );
}
