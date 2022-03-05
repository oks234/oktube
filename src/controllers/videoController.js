import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  console.log({ videos });
  return res.render("home", {
    pageTitle: "Home",
    videos,
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
export const postUpload = async (req, res) => {
  const { description, hashtags, title } = req.body;
  try {
    await Video.create({
      title,
      description,
      createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      meta: {
        views: 0,
        rating: 0,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return res.redirect("/");
};
