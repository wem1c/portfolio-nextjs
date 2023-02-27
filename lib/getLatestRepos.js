import axios from "axios";

const getLatestRepos = async (count) => {
  try {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:wem1c+sort:author-date-asc`
    );
    let repos = res.data.items;
    let latestSixRepos = repos.splice(0, count);
    return latestSixRepos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
