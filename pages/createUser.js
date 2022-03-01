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
                    "linear-gradient(307deg, rgba(36,189,178,1) 0%, rgba(30,24,98,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(307deg, rgba(28,42,110,1) 0%, rgba(87,24,37,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(307deg, rgba(51,148,36,1) 0%, rgba(24,81,98,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    "linear-gradient(307deg, rgba(100,108,27,1) 0%, rgba(75,53,21,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,27,64)",
                  background:
                    " linear-gradient(307deg, rgba(223,76,26,1) 0%, rgba(54,28,7,1) 100%)",
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
