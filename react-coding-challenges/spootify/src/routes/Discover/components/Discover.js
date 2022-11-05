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

    const resp = await axios.get(
      `https://api.spotify.com/v1/me/playlists`,
      config
    );

    // this.setState({
    //   playlists: resp.data.playlists.items,
    // });

    this.setState({
      playlists: resp.data.items,
    });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
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
