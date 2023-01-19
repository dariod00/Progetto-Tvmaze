import { Button, Checkbox, Grid } from "@mui/material";
import { useEffect } from "react";
import useFirebaseFavourite from "../Context/useFirebaseFavourite";
import { Link } from "react-router-dom";
import Favorite from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";


const Favourite = () => {
  const [favourites, addToFavourite, removeFromFavourite] =
    useFirebaseFavourite();

  const label = {
    inputprops: { "arial-label": "checkbox-favourites" },
  };

  const handleCheckbox = (
    checked: boolean,
    id: number,
    title: string,
    image?: string,
    description?: string
  ) => {
    if (checked) {
      removeFromFavourite(id);
    } else {
      addToFavourite(id, title, image, description);
    }
  };

  useEffect(() => {
    console.log(favourites);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favourites]);

  return (
    <>
      <Grid container justifyContent="center" style={{ height: "100vh" }}>
        <Grid
          container
          justifyContent="center"
          style={{ minHeight: "100vh", padding: "2em", width: "100%" }}
        >
          {favourites.map((el: any) => (
            <div
              key={el.id}
              className="card"
              style={{ backgroundColor: "black" }}
            >
              <div className="custom-checkbox">
                <Checkbox
                  checkedIcon={<Favorite />}
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 40 },
                    color: red[600],
                    "&.Mui-checked": { color: red[600] },
                  }}
                  style={{
                    backgroundColor: "transparent",
                    position: "relative",
                  }}
                  {...label}
                  onChange={(e) => {
                    handleCheckbox(
                      !!favourites.find((d) => el.id === d.id),
                      el.id,
                      el.title,
                      el.image,
                      el.description
                    );
                  }}
                  checked={!!favourites.find((d) => el.id === d.id)}
                />
              </div>
              <figure className="card__thumb" >
                <img src={el.image} alt="" className="card__image" />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '300px'

                  }}>
                  <Link to={"/search/" + el.id.toString()}
                    style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 35,
                        backgroundColor: "#FF5733",
                        padding: "9px 18px",
                        fontSize: "15px",
                        top: '-90px',
                      }}
                    >
                      Details
                    </Button>
                  </Link>
                </div>
              </figure>
            </div>
          ))}
        </Grid>
      </Grid>

    </>
  );
};

export default Favourite;