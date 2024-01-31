const home = async (req, res) =>{
    try {
        res.status(200).send("Hello Controller");
    } catch (error) {
        console.log("error")
    }
};

const register = async (req, res) =>{
    try {
        res.status(200).send("Hello Controller Register");
    } catch (error) {
        console.log("error in register")
    }
};

module.exports ={ home, register }
