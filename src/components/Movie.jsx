import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Table from "./TableResult";

const Movie = () => {
  const [movieName, setMovieName] = useState("");
  const [actorName, setActorName] = useState("");
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState("");
  const [movieType, setMovieType] = useState([
    {
      "2D": false,
      "3D": false,
      IMAX: false,
    },
  ]);
  const [radioSelect, setRadioSelect] = useState("");
  const [display, setDisplay] = useState([]);

  const movieGenre = [
    "horror",
    "comedy",
    "romance",
    "drama",
    "thriller",
    "mystery",
    "sci-fi",
  ];

  const movieNameHandler = (e) => {
    console.log(e.target.value);
    setMovieName(e.target.value);
  };

  const actorNameHandler = (e) => {
    console.log(e.target.value);
    setActorName(e.target.value);
  };

  const dateHandler = (e) => {
    console.log(typeof e.target.value);
    setDate(e.target.value);
  };

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    console.log(e.target.name);
    console.log(name, checked);

    const newTypes = {
      ...movieType[0],
      [name]: checked,
    };

    setMovieType([newTypes]);
    console.log(movieType);
  };

  const handleSelect = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const handleRadio = (event) => {
    console.log(event.target.value);
    setRadioSelect(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      movieName: movieName,
      actor: actorName,
      date: date,
      movieType: movieType,
      state: selected,
      movieGenre: radioSelect,
    };
    setDisplay((prev) => prev.concat(data));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
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
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Movie Name"
              value={movieName}
              onChange={movieNameHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Actor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Actor Name"
              value={actorName}
              onChange={actorNameHandler}
            />
          </Form.Group>
          <Form.Group controlId="dateInput">
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" value={date} onChange={dateHandler} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Movie Type</Form.Label>
            <Form.Check
              type="checkbox"
              name="2D"
              label="2D"
              checked={movieType[0]["2D"]}
              onChange={handleCheckChange}
            />
            <Form.Check
              type="checkbox"
              name="3D"
              label="3D"
              checked={movieType[0]["3D"]}
              onChange={handleCheckChange}
            />
            <Form.Check
              type="checkbox"
              name="IMAX"
              label="IMAX"
              checked={movieType[0]["IMAX"]}
              onChange={handleCheckChange}
            />
          </Form.Group>
          <Form.Select
            className="mb-3"
            aria-label="state"
            value={selected}
            onChange={handleSelect}
          >
            <option value="">State</option>
            <option value="Pending">Pending</option>
            <option value="Booked">Booked</option>
            <option value="Not Booked">Not Booked</option>
          </Form.Select>
          <Form.Group
            className="mb-3"
            value={radioSelect}
            onChange={handleRadio}
            radioGroup=""
          >
            <Form.Label>Movie Genre: </Form.Label>
            {movieGenre.map((genre, id) => (
              <Form.Check
                key={id}
                type="radio"
                id={genre.toUpperCase()}
                label={
                  genre[0].toUpperCase() + genre.substring(1, genre.length)
                }
                name="movieGenre"
                value={genre}
                onChange={handleRadio}
              />
            ))}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
      <Table data={display} />
    </div>
  );
};

export default Movie;
