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
        
        img = document.createElement('img')
        img.className = 'project_img'
        img.src = 'static/images/projects/' + project.image
        project_box.appendChild(img)
        
        content = document.createElement('div')
        content.className = 'project_content'
        project_box.appendChild(content)

        h3 = document.createElement('h3')
        h3.innerHTML = project.title
        content.appendChild(h3)

        p = document.createElement('p')
        p.innerHTML = project.description
        content.appendChild(p)
    }
}

load_projects().then()