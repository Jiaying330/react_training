const APIs = (() => {
  const baseURL = "http://localhost:3000/posts";

  const getPosts = () => {
    return fetch(baseURL).then((res) => res.json());
  };

  const createPost = (newPost) => {
    return fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((res) => res.json());
  };

  const deletePost = (id) => {
    return fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  return {
    getPosts,
    createPost,
    deletePost,
  };
})();

const Model = (() => {
  class State {
    #posts;
    #onChange;

    constructor() {
      this.#posts = [];
    }

    get posts() {
      return this.#posts;
    }

    set posts(newPosts) {
      this.#posts = newPosts;
      this.#onChange();
    }

    subscribe(cb) {
      this.#onChange = cb;
    }
  }

  return {
    State,
    ...APIs,
  };
})();

const View = (() => {
  const postList = document.querySelector(".posts__list");
  const addBtn = document.querySelector(".posts__add-btn");
  const addInput = document.querySelector(".posts__input");

  const getInputValue = () => {
    return addInput.value;
  };

  const clearInput = () => {
    addInput.value = "";
  };

  const renderPosts = (posts) => {
    postList.innerHTML = "";
    for (const post of posts) {
      const newPostEl = document.createElement("li");
      const spanEl = document.createElement("span");
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("posts__list-delete-btn");

      spanEl.innerHTML = post.content;
      deleteBtn.innerHTML = "&#10060;";

      newPostEl.appendChild(spanEl);
      newPostEl.appendChild(deleteBtn);
      newPostEl.classList.add("posts__list-item");
      newPostEl.id = `${post.id}`;
      postList.appendChild(newPostEl);
    }
  };

  return {
    postList,
    addBtn,
    addInput,
    getInputValue,
    clearInput,
    renderPosts,
  };
})();

const Controller = ((model, view) => {
  const state = new model.State();

  const setupAddHandler = () => {
    view.addBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const inputValue = view.getInputValue();
      const newPost = {
        content: inputValue,
      };
      model.createPost(newPost).then((res) => {
        state.posts = [...state.posts, res];
        view.clearInput();
      });
    });
  };

  view.postList.addEventListener("click", (event) => {
    const element = event.target;
    if (element.parentElement.classList[0] == "posts__list-item") {
    }

    if (element.className == "posts__list-delete-btn") {
      const id = element.parentElement.id;
      model.deletePost(id).then(() => {
        state.posts = state.posts.filter((post) => post.id != id);
      });
    }
  });

  const init = () => {
    state.subscribe(() => {
      view.renderPosts(state.posts);
    });

    model.getPosts().then((data) => {
      state.posts = data;
    });
    setupAddHandler();
  };

  return {
    init,
  };
})(Model, View);

Controller.init();
