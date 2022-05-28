

module.exports.greeting = (req,res) => {
    res.json({ message: "Hello World" });
}

module.exports.getUsers = (req,res) => {
    //console.log(req.body);
    const { users } = req.body;
    const usersCoding = users?.map(user => ({
        ...user,
        stack:'MERN'
    }))
    res.json({ usersCoding });
}

module.exports.getCreator = (req,res) => {
    res.json({
        name:"David Lopez",
        age:24,
        country:"Colombia",
    })
}
