import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import axios from "axios";

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const token = process.env.REACT_APP_BEARER_TOKEN;
    // const token2 = process.env.REACT_APP_BEARER_TOKEN;
    // console.log("TOKEN");
    // console.log({ token, token2 });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json",
      },
    };

    // const resp1 = await axios.get("https://api.spotify.com/v1/me", config);

    // const userId = resp1.data.id;

    // const resp = await axios.get(
    //   "https://api.spotify.com/v1/browse/featured-playlists",
    //   config
    // );

    // const resp = await axios.get(
    //   `https://api.spotify.com/v1/users/${userId}/playlists`,
    //   config
    // );

    // this.setState({
    //   playlists: resp.data.playlists.items,
    // });

    this.setState({
      loading: true,
    });

    function wait(ms) {
      return new Promise((resolve, reject) => setTimeout(resolve, ms));
    }

    const releasesPromise = axios.get(
      `https://api.spotify.com/v1/browse/new-releases`,
      config
    );

    const playlistPromise = axios.get(
      `https://api.spotify.com/v1/me/playlists`,
      config
    );

    const categoriesPromise = axios.get(
      `https://api.spotify.com/v1/browse/categories`,
      config
    );

    const delayPromise = wait(5000);

    console.log("before resps");

    const resps = await Promise.all([
      releasesPromise,
      playlistPromise,
      categoriesPromise,
      delayPromise,
    ]);

    const [releasesResp, playlistResp, categoriesResp] = resps;

    this.setState({
      newReleases: releasesResp.data.albums.items,
      playlists: playlistResp.data.items,
      categories: categoriesResp.data.categories.items,
      loading: false,
    });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        {this.state.loading && <p>LOADING...</p>}
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
