import { useState, useEffect } from "react";
import axios from "axios";

const ApiCallExample = () => {
  const [arrayValues, setValuesArray] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSampleData = async () => {
      try {
        const apiResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setValuesArray(apiResponse.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchSampleData();
  }, []);

  const deleteRecord = async (id) => {
    try {
      const apiResponse = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      alert("Delete Succesfully");
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
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Id</th>
                  <th scope="col">UserId</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {arrayValues.length > 0 ? (
                  arrayValues.map((value, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <a href={"/api-details/" + value.id}> {value.id}</a>
                      </td>
                      <td>{value.userId}</td>
                      <td>{value.title}</td>
                      <td>{value.body}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteRecord(value.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr colspan="5">No data found</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    </>
  );
};

export default ApiCallExample;
