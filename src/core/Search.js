import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import { getCategories, list } from "./apiCore";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  tField: {
    width: 250,
    marginTop: 2,
  },
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data?.error) {
        console.log(data?.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const searchData = () => {
    // console.log(search, category);
    if (search) {
      list({ search: search || undefined, category: category }).then(
        (response) => {
          if (response.error) {
            console.log(response.error);
          } else {
            setData({ ...data, results: response, searched: true });
          }
        }
      );
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return `Found ${results.length} products`;
    }
    if (searched && results.length < 1) {
      return `Search: No products found`;
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchSubmit(e);
  };

  const searchedProducts = (results = []) => {
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h2 className="mt-4 mb-4 text-center">
            {searchMessage(searched, results)}
          </h2>
          <div className="row">
            {results?.map((product, i) => (
              <div className="col-md-4 mb-3">
                <Card key={i} product={product} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  };

  const classes = useStyles();

  const searchForm = () => (
    <div className="input-group input-group-lg">
      <form onSubmit={searchSubmit}>
        <TextField
          onChange={handleChange("search")}
          id="outlined-basic"
          variant="outlined"
          className={classes.tField}
          autoComplete="off"
          label={<span>Search by product</span>}
        />
      </form>
    </div>
  );

  return (
    <div className="row">
      <div width={20} className="container mb-3">
        {searchForm()}
      </div>
      {/* <div className="container-fluid mb-3">{searchedProducts(results)}</div> */}
    </div>
  );
};

export default Search;
