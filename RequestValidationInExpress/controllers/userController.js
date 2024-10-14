const getUser = async (req, res) => {
     try {
          const { email, password } = req.body;
          console.log("email: ", email);
          console.log("password: ", password);
          res.status(200).json({ message: "User data received successfully" });
     } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Internal Server Error" });
     }
}

module.exports = getUser;