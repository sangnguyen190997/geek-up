import React, { useState } from "react";

export default function Geekup1() {
  const [open, setOpen] = useState();

  const displayValueRadio = () => {
    let element = document.getElementsByName("flexRadioDefault");
    for (let i = 0; i < element.length; i++) {
      if (element[i].checked) {
        setOpen(element[i].value);
      }
    }
  };

  const show1 = () => {
    document.getElementById("home").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("messages").style.display = "none";

    let element = document.getElementsByTagName("button");

    element[0].classList.add("active");
    element[1].classList.remove("active");
    element[2].classList.remove("active");
  };

  const show2 = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("messages").style.display = "none";

    let element = document.getElementsByTagName("button");
    element[1].classList.add("active");
    element[0].classList.remove("active");
    element[2].classList.remove("active");
  };

  const show3 = () => {
    document.getElementById("messages").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "none";

    let element = document.getElementsByTagName("button");
    element[2].classList.add("active");
    element[0].classList.remove("active");
    element[1].classList.remove("active");
  };

  return (
    <div className="container border">
      <h2 className="text-start">Section 1 & 2:</h2>
      <div className="d-flex mt-3">
        <div className="form-check">
          <input
            value="0"
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="home-tab"
            onClick={() => displayValueRadio()}
            defaultChecked
          />
          <label className="form-check-label" htmlFor="home-tab">
            C??u 1
          </label>
        </div>
        <div className="form-check mx-5">
          <input
            value="1"
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="profile-tab"
            onClick={() => displayValueRadio()}
          />
          <label className="form-check-label" htmlFor="profile-tab">
            C??u 2
          </label>
        </div>
        <div className="form-check">
          <input
            value="2"
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="messages-tab"
            onClick={() => displayValueRadio()}
          />
          <label className="form-check-label" htmlFor="messages-tab">
            C??u 3
          </label>
        </div>
      </div>

      <ul className="nav nav-tabs mt-3" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            disabled
          >
            C??u 1{open == 0 ? show1() : null}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            disabled
          >
            C??u 2{open == 1 ? show2() : null}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="messages-tab"
            data-bs-toggle="tab"
            data-bs-target="#messages"
            type="button"
            role="tab"
            aria-controls="messages"
            aria-selected="false"
            disabled
          >
            C??u 3{open == 2 ? show3() : null}
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div
          className="tab-pane active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <p className="fw-bold mt-2 d-flex justify-start fs-5">
            {" "}
            Khi truy c???p 1 trang web (VD:{" "}
            <a href="https://geekadventure.vn">https://geekadventure.vn</a>)
            tr??nh duy???t s??? l??m g???
          </p>
          <hr />
          <div className="text-start">
            <p>
              1. Khi truy c???p trang web th?? tr??nh duy???t s??? g???i ?????n m??y ch??? DNS
              ????? bi??n d???ch domain th??nh 1 ?????a ch??? IP. M???i trang web c?? m???t ?????a
              ch??? IP nh???t ?????nh. ?????a ch??? IP s??? ???????c tr??? v??? cho tr??nh duy???t{" "}
            </p>
            <p>
              {" "}
              2. Tr??nh duy???t s??? d??ng ?????a ch??? IP ???? y??u c???u giao th???c HTTP g???i
              ?????n sever l??u tr??? trang web b???ng port 80{" "}
            </p>
            <p>
              {" "}
              3. N???u server ch???p nh???n request ???? th?? s??? reponse v??? th??ng b??o
              "200 OK". V?? sau ???? tr??nh duy???t s??? truy xu???t m?? HTML c???a trang web
              ????{" "}
            </p>
            <p>
              {" "}
              4. Khi tr??nh duy???t nh???n ???????c m?? HTML server th?? n?? s??? hi???n th??? ra
              tr??nh duy???t 1 trang web ho??n ch???nh
            </p>
          </div>
        </div>
        <div
          className="tab-pane"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="fw-bold mt-2 d-flex justify-start fs-5">
            N???u c?? 2 CSS styles c?? selector c??ng ???ng v??i 1 element tr??n c??y DOM
            th?? style c???a element s??? th??? hi???n nh?? th??? n??o?
          </p>
          <hr />
          <div className="text-start">
            <p>Th?? n?? ph??? thu???c v??o ????? ??u ti??n c???a CSS. G???m c?? 3 c??ch css</p>
            <p>1. Inline CSS ???????c ??u ti??n nh???t</p>
            <p>2. Internal CSS ???????c ??u ti??n th??? hai</p>
            <p>3. External CSS d?????c ??u ti??n th??? ba</p>
          </div>
        </div>
        <div
          className="tab-pane"
          id="messages"
          role="tabpanel"
          aria-labelledby="messages-tab"
        >
          <p className="fw-bold mt-2 d-flex justify-start fs-5">
            T???i sao Javascript c?? c?? ch??? x??? l?? b???t ?????ng b??? (Asynchronous)? C??
            nh??ng c??ch n??o ????? x??? l?? b???t ?????ng b??? trong Javascript?
          </p>
          <hr />
          <div className="text-start">
            <p>
              V?? Javascript l?? m???t ng??n ng??? b???t ?????ng b???. G???m nh???ng h??m ch???y b???t
              ?????ng b???: SetTimeout, SetInterval
            </p>
            <p>C?? 3 c??ch x??? l?? b???t ?????ng b???:</p>
            <p>1. Callback function (C???n th???n d??ng v?? d??? b??? callback hell)</p>
            <p>2. Promise/then</p>
            <p>3. Async/await</p>
          </div>
        </div>
      </div>
    </div>
  );
}
