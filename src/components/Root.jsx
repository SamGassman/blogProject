import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Blog from './Blog.jsx';
import Projects from './Projects.jsx';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      searchValue: '',
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleSearchSubmit(searchValue) {
    this.setState({searchValue});
  }

  handlePageChange(page) {
    this.setState({page});
  }

  render() {
    var pageContent = {
      home: <Home/>,
      blog: <Blog/>,
      projects: <Projects/>
    };

    return (
        <div className={'applicationContainer'} style={styles.container}>
          <NavBar
            handlePageChange={this.handlePageChange}
            handleSearchSubmit={this.handleSearchSubmit}
            />
          <div style={styles.contentContainer}>
            {pageContent[this.state.page]}
          </div>
        </div>
    );
  }
}

export default Root;

const styles = {
  container: {
  },
  contentContainer: {
    marginTop: '3em',
    minHeight: '100% - 3em',  //this causes the margin top to break
    width: '100%',
    flex: '1 auto',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imgDiv: {
    height: 100,
    width: 400
  },
  image: {
    height: 100,
    // width: 500
  }
};