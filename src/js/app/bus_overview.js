import "../../styles/bus_overview.scss";

// DEVELOP
if (process.env.NODE_ENV !== 'production') {
    require('../../bus_overview.html');

    // Hot replacement; Comment below for hot reload
    // if (module.hot) {
    //     module.hot.accept();
    // }
}