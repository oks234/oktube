let videos = [
  { title: "My Video", rating: 5, comments: 2, createAt: "2 minutes ago", views: 59, id: 1 },
  { title: "Your Video", rating: 5, comments: 2, createAt: "2 minutes ago", views: 2, id: 2 },
  { title: "Our Video", rating: 5, comments: 2, createAt: "2 minutes ago", views: 1, id: 3 },
];

export const trending = (req, res) => {
  return res.render("home", {
    pageTitle: "Home",
    videos,
  });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  const pageTitle = `Watching ${video.title}`;
  return res.render("watch", {
    pageTitle,
    video,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  const pageTitle = `Edit ${video.title}`;
  return res.render("edit", {
    pageTitle: pageTitle,
    video,
  });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
