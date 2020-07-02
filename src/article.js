import React, { Component } from "react";
import config from "./config";

class Article extends Component {
  constructor() {
    super();
    this.state = {
      articles: {},
    };
  }

  componentDidMount() {
    const ref = config.ref("articles");
    ref.on("value", (snapShot) => {
      let data = snapShot.val();
      this.setState({
        articles: { ...data },
      });
    });
  }

  render() {
    const articlesList = Object.keys(this.state.articles).map((key) => {
      return (
        <div>
          <p key={key}> {this.state.articles[key].offer_id}</p>
          <p key={key}> {this.state.articles[key].uid}</p>
          <img src={this.state.articles[key].image} />
          <br /> <br />
        </div>
      );
    });
    return <div>{articlesList}</div>;
  }
}

export default Article;
