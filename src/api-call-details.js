import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ApiCallDetails = () => {
  const [objectValues, setValuesObject] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSampleDatDetails = async () => {
      try {
        const apiResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setValuesObject(apiResponse.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchSampleDatDetails();
  }, []);

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
                  <th scope="col">Id</th>
                  <th scope="col">UserId</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </tr>
              </thead>
              <tbody>
                {objectValues != null ? (
                  <tr>
                    <td>{objectValues.id}</td>
                    <td>{objectValues.userId}</td>
                    <td>{objectValues.title}</td>
                    <td>{objectValues.body}</td>
                  </tr>
                ) : (
                  <tr colspan="4">No data found</tr>
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

export default ApiCallDetails;
