// import axios from "axios";

document.getElementById("btn1").addEventListener("click", async () => {
    console.log("login cliked.");
    try {
        const result = await axios.post("/auth/login", {
            email: "arash@gmail.com",
            password: "123456",
        });
        console.log(result.statusText);
    } catch (error) {
        console.log(error);
    }
});
