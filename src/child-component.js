const ChildComponent = (props) => {
  return (
    <>
      <div>
        <h5>Id: {props.id}</h5>
        <h5>Name: {props.name}</h5>
        <h5>Email: {props.email}</h5>
        <h5>JsonData: {props.jsonData}</h5>
      </div>
    </>
  );
};

export default ChildComponent;
