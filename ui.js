class UI {
    constructor () {
        this.profile = document.getElementById('profile');
    }


    //Display Profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3" >
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" traget="_blink" class="btn btn-primary btn-block mb-3">View profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-success">Public Repos : ${user.followers}</span>
                        <span class="badge badge-info">Public Repos : ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    //show user repos
    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output+= `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_bink">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks : ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>`;
        });

        //Output repos
        document.getElementById('repos').innerHTML = output;
    }
    
    //show alert message
    showAlert(msg, className) {
        //clear existing alert
        this.clearAlert();
        //create a div
        const div = document.createElement('div');
        //add class
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(msg));
        //get a parent
        const container = document.querySelector('.searchContainer');
        //get the search box
        const search = document.querySelector('.search');
        //insert the alert
        container.insertBefore(div, search);

        //timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }

    //clear alert
    clearAlert() {
        const existingAlert = document.querySelector('.alert');

        if(existingAlert){
            existingAlert.remove();
        }
    }

    //Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}