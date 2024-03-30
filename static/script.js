async function load_projects() {
    var response = await fetch('/static/data/projects.json')
    var projects = await response.json()
    
    for (var project of projects) {
        if (project.url) {
            project_box = document.createElement('a')
            project_box.href = project.url
            project_box.target = '_blank'
        } else {
            project_box = document.createElement('div')
        }
        project_box.className = 'project'
        projects_grid.appendChild(project_box)
        
        image = document.createElement('img')
        image.className = 'project_img'
        image.src = 'static/images/projects/' + project.image
        project_box.appendChild(image)
        
        content = document.createElement('div')
        content.className = 'project_content'
        project_box.appendChild(content)

        title = document.createElement('h3')
        title.innerHTML = project.title
        content.appendChild(title)

        date = document.createElement('p')
        date.className = 'project_date'
        date.innerHTML = project.date
        content.appendChild(date)

        description = document.createElement('p')
        description.innerHTML = project.description
        content.appendChild(description)
    }
}

load_projects().then()