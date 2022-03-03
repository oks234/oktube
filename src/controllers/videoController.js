import Video from "../models/Video";

export const home = (req, res) => {
  Video.find({}, (error, videos) => {})
  return res.render("home", {
    pageTitle: "Home",
  });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const pageTitle = `Watching`;
  return res.render("watch", {
    pageTitle,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const pageTitle = `Edit`;
  return res.render("edit", {
    pageTitle: pageTitle,
  });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  const pageTitle = "Upload video";
  return res.render("upload", {
    pageTitle: pageTitle,
  });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
