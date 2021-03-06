import routes from "../routes";

export const getJoin = (req, res) => res.render("join");

export const postJoin = (req, res) => {
    const { body: { name, email, password, password2 }} = req;
    if (password !== password2) {
        res.status(400);
    } else {
        // TODO: Register User
        // TODO: User Login
        res.redirect(routes.home)
    }
    res.render("join", {pageTitle: "Join"});
}

export const getLogin = (req, res) => res.render("login");
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    // TODO : Progress logout
    res.redirect(routes.home);
};
export const users = (req, res) => res.render("user");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");