const SAMPLE_NAMES = ["Octo", "Jelly", "Robot", "Code", "Hack", "Mega", "Potato", "Hacker", "Crab", "Monday", "Tuesday"];
const ENDINGS = ["Jam", "Competition", "Fest", "Test", "Ranker"]
const USER_NAMES = ["Nicole", "Matthew", "Tyson", "Gunsimar", "Joe", "Bob", "Mike", "John", "Jake", "Diane", "Alan", "Smith", "Evan"];
const PROGRAMMING_LANGUAGES = ["Java", "NodeJS", "Javascript", "Typescript", "Ruby", "Python", "C", "C++"];

async function testData(firebase) {
    const workspaceRef = firebase.database().ref('workspaces');
    for(let i = 0; i < 50; i++) {
        const first_index = Math.floor(Math.random() * SAMPLE_NAMES.length);
        const index = Math.floor(Math.random() * SAMPLE_NAMES.length);
        const ending = ENDINGS[Math.floor(Math.random() * ENDINGS.length)];
        const name = SAMPLE_NAMES[first_index] + " " + SAMPLE_NAMES[index] + " " + ending;
        let workspace = { metadata: {name: name, description: "Sample workspace"}, members: {}};
        workspaceRef.push(workspace);
    }

    const workspaces = (await workspaceRef.once('value')).val();
    const workspaceIds = Object.keys(workspaces);

    const usersRef = firebase.database().ref('users');
    for(let i = 0; i < 50; i++) {
        const index = Math.floor(Math.random() * USER_NAMES.length);
        const name = USER_NAMES[index];
        const email = name + "@gmail.com";
        const workspaceId = workspaceIds[Math.floor(Math.random() * workspaceIds.length )];
        let workspace = {};
        workspace[workspaceId] = true;
        let user = { name: name, email: email, workspaces: workspace};
        const userKey = (await usersRef.push(user)).key;
        firebase.database().ref('/workspaces/' + workspaceId + '/members/' + userKey).set(true);
        firebase.database().ref('/workspace-members/' + workspaceId + '/' + userKey).set({
            programming_languages: [PROGRAMMING_LANGUAGES[0], PROGRAMMING_LANGUAGES[1]],
            headline: "Headline"
        });
    }
}

export default testData;