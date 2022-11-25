import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TaskApi() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const tasks = data?.filter((task) => task.completed === false);
  const userId = data?.filter((task) => task.userId === 5);

  const students = [
    {
      id: 1,
      name: "Jame",
      score: 9,
    },
    {
      id: 2,
      name: "Jack",
      score: 7,
    },
    {
      id: 3,
      name: "Davis",
      score: 7.5,
    },
    {
      id: 4,
      name: "Erik",
      score: 10,
    },
  ];

  const newStudents = students;
  newStudents
    .sort((s1, s2) => s1.score - s2.score)
    .forEach((student) => {
      student.score = Math.min(10, student.score + 0.5);
    });

  return (
    <div className="container">
      <div className="text-start mt-5">
        <h2>Section 3:</h2>
        <h3>Task Uncompleted: {tasks?.length} tasks</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">userId</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Complete</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.userId}</th>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>UserId 5: có {userId?.length} chưa hoàn thành</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">userId</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Complete</th>
            </tr>
          </thead>
          <tbody>
            {userId?.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.userId}</th>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Section 4:</h2>
        <div className="text-start mt-5">
          <p>
            1. Đoạn code sau mang giá trị 7.5 vì SORT là hàm sắp xếp theo thứ tự
            giảm dần. FOREACH là hàm lặp qua từng phần tử. Nên ở vị trí thứ 0 sẽ
            là score 7 của Jack. Math.min là hàm lấy giá trị nhỏ nhất. Nên sẽ
            cho ra kết quả 7.5
          </p>
          <p>
            2. Không gian lưu trữ sẽ là 1 hằng số cho nên là O(1) vì không sử
            dụng cấu trúc dữ liệu gì. Độ phức tạp sẽ là O(n^2) vì forEach sử
            dụng 1 vòng for và hàm Math sử dụng thêm một vòng for nữa
          </p>
          <p>
            3. Đoạn code trên có thể dùng map để duyệt qua từng phần tử đảm bảo
            mảng student không bị thay đổi
          </p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {newStudents?.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
