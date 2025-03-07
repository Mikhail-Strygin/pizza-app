import React from "react";

const Categories = () => {
  const [active, setActive] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((category, ind) => (
          <li
            onClick={() => setActive(ind)}
            key={ind}
            className={ind == active ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
      {/* <ul>
        <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul> */}
    </div>
  );
};

export default Categories;
