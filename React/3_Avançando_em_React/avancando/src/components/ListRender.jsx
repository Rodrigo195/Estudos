import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Rodrigo", "Iandra", "Verity"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Rodrigo", age: 24 },
    { id: 2, name: "Iandra", age: 24 },
    { id: 3, name: "Verity", age: 29 },
  ]);

  return (
    <div>
      {/* 4 - render sem key */}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* 5 - render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
