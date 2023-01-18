import React from "react";
import ShowModal from "./ShowModal";

function Card(props) {
  const { character, showDetails } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="card" onClick={handleOpen}>
        <img src={character.image} />
        <p>{character.name}</p>
      </div>

      <ShowModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        character={character}
      />
    </>
  );
}

export default Card;
