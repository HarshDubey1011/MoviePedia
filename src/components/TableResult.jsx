import Table from "react-bootstrap/Table";

import Card from "react-bootstrap/Card";

const TableResult = ({ data }) => {
  console.log("data", data);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        body
        style={{
          width: "50rem",
          backgroundColor: "transparent",
          color: "#fff",
        }}
        className="shadow-md mb-5"
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Movie</th>
              <th>Actor</th>
              <th>Release Date</th>
              <th>Movie Type</th>
              <th>State</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody style={{ color: "#fff" }}>
            {data.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.movieName}</td>
                <td>{data.actor}</td>
                <td>{data.date}</td>
                <td>
                  {Array.isArray(data.movieType)
                    ? Object.entries(data.movieType[0])
                        .filter(([key, value]) => value)
                        .map(([key]) => key)
                        .join(", ")
                    : ""}
                </td>
                <td>{data.state}</td>
                <td>{data.movieGenre}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default TableResult;
