export const LOGIN = "LOGIN";
export const login = (username,password)=>{
    fetch("/a/loginPOST"+username+"/"+password)
        .then( response=> response.text())
        .then( json=> {
            console.log(json)
        })
};