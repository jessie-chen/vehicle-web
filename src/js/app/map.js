
import "../../styles/map.scss";

// DEVELOP
if (process.env.NODE_ENV !== 'production') {
    require('../../map.html');

    // Hot replacement; Comment below for hot reload
    // if (module.hot) {
    //     module.hot.accept();
    // }
}
