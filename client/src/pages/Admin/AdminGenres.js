import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Icons
import garbage from "../../icons/garbage-red.svg";

const GenrePageDiv = styled.div`
  color: ${(props) => props.theme.color.textLight};
`;

const PageHeader = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  font-weight: 200;
  color: ${(props) => props.theme.color.highlight2};
  letter-spacing: 1.6rem;
  margin: 3vh 0;
`;

const GenreDisplayToggle = styled.div`
  width: 280px;
  height: 5rem;
  margin: 0 auto;
  display: none;
  border-radius: 100px;
  overflow: hidden;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: flex;
  }
`;

const AddGenreToggle = styled.div`
  background-color: ${(props) =>
    props.displayList
      ? props.theme.color.grayedOut
      : props.theme.color.highlight1};
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.textDark};
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.7);
  }
`;
const ViewGenresToggle = styled(AddGenreToggle)`
  background-color: ${(props) =>
    props.displayList
      ? props.theme.color.highlight3
      : props.theme.color.grayedOut};
`;

const DivsContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 5rem 0;
  justify-content: space-evenly;
`;

const AddGenreDiv = styled.div`
  width: 42%;
  height: fit-content;
  border: 2px solid ${(props) => props.theme.color.highlight1};
  border-radius: 10px;
  & h3 {
    text-align: center;
    font-size: 1.8rem;
    color: ${(props) => props.theme.color.highlight1};
  }
  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: ${(props) => (props.displayList ? "none" : "initial")};
    width: 80%;
  }
`;
const ViewAndRemoveDiv = styled(AddGenreDiv)`
  border-color: ${(props) => props.theme.color.highlight3};
  & h3 {
    color: ${(props) => props.theme.color.highlight3};
  }
  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: ${(props) => (props.displayList ? "initial" : "none")};
  }
`;

const AddNewForm = styled.form`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const InputGroup = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  min-width: 270px;
  justify-content: center;
`;

const InputLabel = styled.label`
  font-size: 1.4rem;
  margin-right: 1rem;
`;

const InputText = styled.input`
  flex: 1;
`;

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.color.errorRed};
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  margin: ${(props) => (props.errorPresent ? "0.5rem 0 3rem" : "3rem 0")};
  border: none;
  padding: 0.8rem 2rem;
  font-family: inherit;
  font-weight: 500;
  border-radius: 5px;
  background: ${(props) => props.theme.color.highlight1};
  color: ${(props) => props.theme.color.textDark};
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

const GenreTable = styled.table`
  border-collapse: collapse;
  width: 30rem;
  margin: 0 auto 2rem;
`;

const ColName = styled.col`
  width: stretch;
`;
const ColDelete = styled.col`
  width: 6%;
`;

const TableRow = styled.tr`
  transition: all 0.2s;
  &:hover {
    background: #333;
  }
`;

const TableHeading = styled.th`
  text-align: left;
  font-size: 1.6rem;
  padding: 1rem;
  color: ${(props) => props.theme.color.highlight3};
  cursor: pointer;
  display: flex;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 1.4rem;
  }
`;

const HeadingText = styled.p`
  margin-right: 1rem;
`;

const SvgDiv = styled.div`
  display: inline-flex;
  align-self: center;
`;

const SvgIcon = styled.svg`
  width: 1.5em;
  height: 1.5em;
`;

const TableIconHeading = styled.th`
  text-align: left;
  font-size: 1.2rem;
  padding: 1rem;
  color: ${(props) => props.theme.color.textLight};
`;

const TableData = styled.td`
  padding: 1rem;
  font-size: 1.5rem;
  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 1.2rem;
  }
`;

const TableIcon = styled.td`
  padding: 1rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  height: 5rem;
  width: 3rem;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.6);
  }
`;

const AdminGenres = () => {
  const [genres, setGenres] = useState([]);
  const [newGenre, setNewGenre] = useState("");
  const [error, setError] = useState(false);
  const [reverseGenres, setReverseGenres] = useState(false);
  const [displayList, setDisplayList] = useState(true);

  const getGenres = async () => {
    const response = await fetch("/api/genres/");
    const allGenres = await response.json();
    setGenres(allGenres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  let sortedGenres = reverseGenres
    ? genres
        .sort((a, b) =>
          a.genre_name.toLowerCase() > b.genre_name.toLowerCase() ? 1 : -1
        )
        .reverse()
    : genres.sort((a, b) =>
        a.genre_name.toLowerCase() > b.genre_name.toLowerCase() ? 1 : -1
      );

  const addGenre = async (e) => {
    let data = {
      newGenre: newGenre,
    };
    try {
      if (
        !genres ||
        newGenre === "" ||
        genres.some((g) => g.genre_name === newGenre)
      ) {
        setError(true);
        return;
      }
      const res = await fetch("/api/genres/", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(res);
      setNewGenre("");
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteGenre = async (name) => {
    let data = { name: name };
    try {
      await fetch("/api/genres", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify(data),
      });
      getGenres();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <GenrePageDiv>
      <title>JG Admin | Genres</title>
      <PageHeader>Genres</PageHeader>
      <GenreDisplayToggle>
        <ViewGenresToggle
          displayList={displayList}
          onClick={() => setDisplayList(true)}
        >
          View & Remove
        </ViewGenresToggle>
        <AddGenreToggle
          displayList={displayList}
          onClick={() => setDisplayList(false)}
        >
          Add Genre
        </AddGenreToggle>
      </GenreDisplayToggle>
      <DivsContainer>
        <ViewAndRemoveDiv displayList={displayList}>
          <h3>Genre List</h3>
          <GenreTable>
            <colgroup>
              <ColName span="1" />
              <ColDelete span="1" />
            </colgroup>
            <thead>
              <TableRow>
                <TableHeading
                  onClick={() =>
                    setReverseGenres((currReverse) => !currReverse)
                  }
                >
                  <HeadingText>Genre</HeadingText>
                  {reverseGenres ? (
                    <SvgDiv>
                      <SvgIcon
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.258 7.758a1.05 1.05 0 0 1 1.484 0l6 6a1.05 1.05 0 1 1-1.484 1.484L12 9.985l-5.258 5.257a1.05 1.05 0 0 1-1.484-1.484l6-6Z"
                          fill="#fff"
                          fillRule="nonzero"
                          className="fill-000000"
                        ></path>
                      </SvgIcon>
                    </SvgDiv>
                  ) : (
                    <SvgDiv>
                      <SvgIcon
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m11.258 16.242-6-6a1.05 1.05 0 1 1 1.484-1.484L12 14.015l5.258-5.257a1.05 1.05 0 1 1 1.484 1.484l-6 6a1.05 1.05 0 0 1-1.484 0Z"
                          fill="#fff"
                          fillRule="nonzero"
                          className="fill-000000"
                        ></path>
                      </SvgIcon>
                    </SvgDiv>
                  )}
                </TableHeading>
                <TableIconHeading>Delete</TableIconHeading>
              </TableRow>
            </thead>
            <tbody>
              {sortedGenres &&
                sortedGenres.map((g) => (
                  <TableRow key={g.genre_name}>
                    <TableData>{g.genre_name}</TableData>
                    <TableIcon>
                      <Icon
                        src={garbage}
                        alt="Delete Button"
                        onClick={() => deleteGenre(g.genre_name)}
                      />
                    </TableIcon>
                  </TableRow>
                ))}
            </tbody>
          </GenreTable>
        </ViewAndRemoveDiv>
        <AddGenreDiv displayList={displayList}>
          <h3>Add Genre</h3>
          <AddNewForm>
            <InputGroup>
              <InputLabel htmlFor="genre">New Genre:</InputLabel>
              <InputText
                type="text"
                name="genre"
                placeholder='ex: "Indie Rock"'
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
              />
            </InputGroup>
            {error && (
              <ErrorMessage>Genre name must be unique.</ErrorMessage>
            )}
            <SubmitButton errorPresent={error} onClick={() => addGenre()}>
              Add Genre
            </SubmitButton>
          </AddNewForm>
        </AddGenreDiv>
      </DivsContainer>
    </GenrePageDiv>
  );
};

export default AdminGenres;
