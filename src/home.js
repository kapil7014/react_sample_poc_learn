import ChildComponent from "./child-component";
import ReduxCounter from "./redux-counter";

const Home = () => {
  const user = [
    { id: 1, name: "Kapil", email: "kapil@gmail.com" },
    { id: 2, name: "Sawagath Pendu", email: "sawagath@gmail.com" },
  ];

  return (
    <>
      <div className="row">
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/bootstrap"
            >
              Bootstrap
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={`/material/${user[1].id}/${user[1].name}`}
            >
              Material
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={`/api-example`}>
              API Example
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <ChildComponent
          name={user[0].name}
          email={user[0].email}
          jsonData={JSON.stringify(user)}
        ></ChildComponent>
      </div>
      <div>
        <ReduxCounter />
      </div>
    </>
  );
};

export default Home;
