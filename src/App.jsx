import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Zait fares",
        bio: "A software developer with a passion for coding.",
        imgSrc: "steve.JPG",
        profession: "Software Developer",
      },
      shows: false,
      mountedTime: Date.now(),
      timeInterval: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timeInterval: Math.floor((Date.now() - this.state.mountedTime) / 1000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { Person, shows, timeInterval } = this.state;

    return (
      <section className="flex items-center justify-center bg-[url(wall.jpg)] bg-cover h-screen w-screen ">
      <div className="flex items-center justify-center gap-4 flex-col">
        <button className="flex items-center justify-center rounded-xl py-2 px-6 bg-gradient-to-t from-red-400 to-blue-500 hover:shadow-xl hover:shadow-white transition-all duration-200" onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="flex items-center justify-center flex-col text-white text-xl">
            <img
              src={Person.imgSrc} className="rounded-xl w-52 h-52"/>
            <h1 className="text-3xl font-bold">{Person.fullName}</h1>
            <h2 className="text-2xl">{Person.profession}</h2>
            <p>{Person.bio}</p>
          </div>
        )}
        <div>
          <h3 className="text-2xl font-bold text-white">Time since component mounted: {timeInterval} seconds</h3>
        </div>
      </div>
      </section>
    );
  }
}
export default App;