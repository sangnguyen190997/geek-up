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
  };

  const show2 = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("messages").style.display = "none";
  };

  const show3 = () => {
    document.getElementById("messages").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("profile").style.display = "none";
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
          />
          <label className="form-check-label" htmlFor="home-tab">
            Câu 1
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
            Câu 2
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
            Câu 3
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
            onClick={() => show1()}
          >
            Câu 1{open == 0 ? show1() : null}
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
            onClick={() => show2()}
          >
            Câu 2{open == 1 ? show2() : null}
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
            onClick={() => show3()}
          >
            Câu 3{open == 2 ? show3() : null}
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
            Khi truy cập 1 trang web (VD:{" "}
            <a href="https://geekadventure.vn">https://geekadventure.vn</a>)
            trình duyệt sẽ làm gì?
          </p>
          <hr />
          <div className="text-start">
            <p>
              1. Khi truy cập trang web thì trình duyệt sẽ gọi đến máy chủ DNS
              để biên dịch domain thành 1 địa chỉ IP. Mỗi trang web có một địa
              chỉ IP nhất định. Địa chỉ IP sẽ được trả về cho trình duyệt{" "}
            </p>
            <p>
              {" "}
              2. Trình duyệt sẽ dùng địa chỉ IP đó yêu cầu giao thức HTTP gọi
              đến sever lưu trữ trang web bằng port 80{" "}
            </p>
            <p>
              {" "}
              3. Nếu server chấp nhận request đó thì sẽ reponse về thông báo
              "200 OK". Và sau đó trình duyệt sẽ truy xuất mã HTML của trang web
              đó{" "}
            </p>
            <p>
              {" "}
              4. Khi trình duyệt nhận được mã HTML server thì nó sẽ hiển thị ra
              trình duyệt 1 trang web hoàn chỉnh
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
            Nếu có 2 CSS styles có selector cùng ứng vơi 1 element trên cây DOM
            thì style của element sẽ thể hiện như thế nào?
          </p>
          <hr />
          <div className="text-start">
            <p>Thì nó phụ thuộc vào độ ưu tiên của CSS. Gồm có 3 cách css</p>
            <p>1. Inline CSS được ưu tiên nhất</p>
            <p>2. Internal CSS được ưu tiên thứ hai</p>
            <p>3. External CSS dược ưu tiên thứ ba</p>
          </div>
        </div>
        <div
          className="tab-pane"
          id="messages"
          role="tabpanel"
          aria-labelledby="messages-tab"
        >
          <p className="fw-bold mt-2 d-flex justify-start fs-5">
            Tại sao Javascript có cơ chế xử lý bất đồng bộ (Asynchronous)? Có
            nhưng cách nào để xử lý bất đồng bộ trong Javascript?
          </p>
          <hr />
          <div className="text-start">
            <p>
              Vì Javascript là một ngôn ngữ bất đồng bộ. Gồm những hàm chạy bất
              đồng bộ: SetTimeout, SetInterval
            </p>
            <p>Có 3 cách xử lý bất đồng bộ:</p>
            <p>1. Callback function (Cẩn thận dùng vì dễ bị callback hell)</p>
            <p>2. Promise/then</p>
            <p>3. Async/await</p>
          </div>
        </div>
      </div>
    </div>
  );
}
