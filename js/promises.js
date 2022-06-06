"use strict";

const URL = "https://api.github.com/users/romeocohens17/events/public";

fetch(URL, {headers: {'Authorization': `token ${GIT_HUB_KEY}`}})
.then((resp) => resp.json())
.then((data) => {
    console.log(data);
    let lastCommit = {
        data: `${data[0].created_at}`
    }
    console.log(lastCommit);
});