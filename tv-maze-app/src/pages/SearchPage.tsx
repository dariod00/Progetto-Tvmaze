import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputBase,
  Paper,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getShowsBySearch, ShowType } from "../Api";
import { Link, useSearchParams } from "react-router-dom";
import useFirebaseFavourite from "../Context/useFirebaseFavourite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";


const SearchPage = () => {
  const [currentSearch, setCurrentSearch] = useSearchParams();
  const [shows, setShows] = useState<ShowType[]>([]);

  const [favourites, addToFavourite, removeFromFavourite] =
    useFirebaseFavourite();

  const handleOnSearchChange = useCallback(
    (query: string) => {
      setCurrentSearch({ search: query });
    },
    [setCurrentSearch]
  );

  const isSearchButtonDisabled = () =>
    currentSearch.get("search")?.trim().length === 0;

  const handleOnSearch = useCallback(() => {
    getShowsBySearch(currentSearch?.get("search") || "").then((res) =>
      setShows(res)
    );
  }, [currentSearch]);

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
    const currentSearchStr = currentSearch?.get("search")?.trim();
    if (
      !!currentSearchStr &&
      currentSearchStr.length > 0 &&
      shows.length === 0
    ) {
      handleOnSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favourites]);

  return (
    <>
      <Grid container justifyContent="center" style={{ height: "100vh" }}>
        <Grid item style={{ padding: "2em" }}>
          <Paper
            component="form"
            sx={{ display: "flex", alignItems: "center" }}
            style={{ padding: "2em" }}
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <FormControl>
              <InputBase
                id="outlined-basic"
                placeholder="Search by title..."
                onChange={(e) => handleOnSearchChange(e.target.value)}
                value={currentSearch.get("search") || ""}
                autoFocus
              />
            </FormControl>
            <FormControl>
              <Button
                disabled={isSearchButtonDisabled()}
                onClick={handleOnSearch}
              >
                Search
              </Button>
            </FormControl>
          </Paper>
        </Grid>
        <Grid
          container
          justifyContent="center"
        >
          {shows.map((el: any) => (
            <div
              key={el.id}
              className="card"
              style={{ backgroundColor: "black" }}
            >
              <div className="custom-checkbox">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 40 }, color: red[600], '&.Mui-checked': { color: red[600] } }}
                  style={{ backgroundColor: "transparent", position: "relative" }}
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
              <figure className="card__thumb" style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
                <img src={el.image} alt="" className="card__image" />
                <figcaption className="card__caption">
                  <Link to={el.id.toString()}
                    style={{
                      textDecoration: 'none'
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 35,
                        backgroundColor: "#FF5733",
                        padding: "9px 18px",
                        fontSize: "15px"
                      }}
                    >
                      See More
                    </Button>
                  </Link>
                </figcaption>
              </figure>
            </div>
          ))}
        </Grid>
      </Grid>

    </>
  );
};

export default SearchPage;
