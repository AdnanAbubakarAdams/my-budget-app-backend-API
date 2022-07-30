const validateURL = (req, res, next) => {
    console.log("lets validate the authencity of each transaction")

    next();
};

module.exports = { validateURL }