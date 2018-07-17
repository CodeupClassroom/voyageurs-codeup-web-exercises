const wait = num => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, num);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const getDateOfLastPushEvent = username => {
    const token = '42cfa067c38e50c2cbb95116be719cc20a1f32cd';
    const url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url)//, {headers: {'Authorization': `token ${token}`}})
        .then(data => data.json())
        .then(events => events.filter(event => event.type === "PushEvent"))
        .then(pushevents => pushevents[0].created_at)
}

// This is the example from class where we broke out the
// function into several parts
// const getEventsAsString = username => {
//     const token = '42cfa067c38e50c2cbb95116be719cc20a1f32cd';
//     const url = `https://api.github.com/users/${username}/events/public`
//     return fetch(url, {headers: {'Authorization': `token ${token}`}})
// }
// const getEventsAsJSON = username => {
//     return getEventsAsString(username).then(data => {
//         return data.json()
//     });
// }
// const getPushEvents = username => {
//     return getEventsAsJSON(username)
//         .then(events => events.filter(event => event.type === "PushEvent"));
// }
// const getDateOfLastPushEvent = (username) => {
//     return getPushEvents(username).then(function (pushevents) {
//       return pushevents[0].created_at;
//     }
// }

getDateOfLastPushEvent("danielfryar")
    .then(data => {
        console.log(data);
    }).catch(error => console.error(error));





