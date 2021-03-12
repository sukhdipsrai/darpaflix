export const createUser = (user) => {
  return $.ajax({
    method: `POST`,
    url: `/api/users`,
    data: { user },
  });
};

export const loginUser = (user) => {
  return $.ajax({
    method: `POST`,
    url: `/api/session`,
    data: { user },
  });
};

export const logoutUser = (id) => {
  return $.ajax({
    method: `DELETE`,
    url: `/api/session/${id}`,
  });
};

export const testFetchPhoto = () => {
  return $.ajax({
    method: "GET",
    url: "api/videos",
  });
};
