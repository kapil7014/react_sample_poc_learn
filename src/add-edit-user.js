import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReduxCounter from "./redux-counter";

const AddEditUser = () => {
  const [objectValues, setValuesObject] = useState({
    userId: 8,
    title: "Test Data Learn",
    body: "Test Data Learn",
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {}, []);

  const textboxValueChange = (event) => {
    const { name, value } = event.target;
    setValuesObject((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const inserUserDetails = async () => {
    try {
      const apiResponse = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        objectValues
      );
      setValuesObject(apiResponse.data);
      alert(JSON.stringify(apiResponse.data));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const updateUserDetails = async () => {
    try {
      const apiResponse = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        objectValues
      );
      setValuesObject(apiResponse.data);
      alert(JSON.stringify(apiResponse.data));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div>
        <div className="row">
          <div className="col-12">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input
                  type="text"
                  name="title"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter title"
                  value={objectValues.title}
                  onChange={textboxValueChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Body</label>
                <input
                  type="text"
                  name="body"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter body"
                  value={objectValues.body}
                  onChange={textboxValueChange}
                />
              </div>
            </form>
          </div>
          <div className="col-12 pt-3">
            {id != null && id > 0 ? (
              <button className="btn btn-success" onClick={updateUserDetails}>
                Update
              </button>
            ) : (
              <button className="btn btn-success" onClick={inserUserDetails}>
                Submit
              </button>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ReduxCounter />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEditUser;
