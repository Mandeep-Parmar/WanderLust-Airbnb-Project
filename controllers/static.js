const renderPrivacy = (req, res) => {
    res.render("static/privacy");
};

const renderTerms = (req, res) => {
    res.render("static/terms");
};

module.exports = {
    renderPrivacy,
    renderTerms
};