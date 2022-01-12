import React, { Component } from "react";
import "./App.css";
import TOC from "./component/TOC";
import Subject from "./component/Subject";
import Content from "./component/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      content: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }

  render() {
    console.log("App render");
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.content[0].title;
      _desc = this.state.content[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject> */}
        <header>
        <h1>
          <a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault();
            //this.state.mode = 'webcome';
            this.setState({
              mode:'welcome'
            });
            alert('hi');
          }.bind(this)}>{this.state.subject.title}</a>
        </h1>
        {this.state.subject.sub}
      </header>
        <TOC data={this.state.content}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
