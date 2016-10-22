/**
 * Created by IT on 16/10/21.
 */

import "../../styles/login.scss";

// DEVELOP
if (process.env.NODE_ENV !== 'production') {
    require('../../login.html');

    // Hot replacement; Comment below for hot reload
    // if (module.hot) {
    //     module.hot.accept();
    // }
}

console.log("fuck");
