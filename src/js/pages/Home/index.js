import React, { Fragment } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PeriodicTable from "../../components/PeriodicTable";
import Styles from "../../../css/Home.css";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHoverActive: false
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main onMouseOver={this.onMouseOver}>
          <div className={Styles.homePageLogo}>
            <img
              src="http://sod-a.rsc-cdn.org/www.rsc.org/periodic-table/content/images/periodic-table-logo.png"
              alt="Royal Society of Chemistry - Periodic table"
            />
          </div>
          <PeriodicTable />
          <div className={Styles.container}>
            
          </div>
          <div className={Styles.socialbarContainer}>
            <a
              href="http://www.rsc.org/learn-chemistry/newsletter"
            >
              &nbsp;
            </a>
            <a
              href="http://www.rsc.org/learn-chemistry/feedback"
            >
              &nbsp;
            </a>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
