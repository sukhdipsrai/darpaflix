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
    url: "api/movies",
  });
};

export const getList = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/lists/${id}`,
  });
};

export const addToList = (data) => {
  return $.ajax({
    method: "POST",
    url: `/api/lists`,
    data: { data },
  });
};

export const removeFromList = (data) => {
  return $.ajax({
    method: "DELETE",
    url: `api/lists/${data.id}`,
    data: { data },
  });
};

export const getSearch = (query) => {
  return $.ajax({
    method: "GET",
    url: `api/search/${query}`,
  });
};
