
export async function get(url, options = {}) {
    const response = await fetch(url, options);
    if(response.status == 203) {
        console.log("You haven't login yet. Please login first!");
        return Promise.reject("Login required.");
    }
    else {
        return response.json();
    }
}

