"use strict";

const GIT_LAST_COMMIT = (username) => {
    const URL = `https://api.github.com/users/${username}/events/public`;
    return fetch(URL, {headers: {'Authorization': `token ${GIT_HUB_KEY}`}})
        .then((resp) => resp.json())
        .then(data => data[0])
        .then(firstEvent => console.log(firstEvent.created_at))
        .catch(error => console.error(error))
}

GIT_LAST_COMMIT('romeocohens17')

// let userInfo = `Username: ${data[0].actor.login} Last Commit: ${data[0].created_at.substring(0,10)}`;
//     let comMsg= `Commit Message: ${data[0].payload.commits[0].message}`;
//     console.log(userInfo);
//     document.getElementById('first').append(userInfo);
//     document.getElementById('second').append(comMsg);
// });
