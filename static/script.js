async function load_projects() {
    var response = await fetch('/static/data/projects.json')
    var projects = await response.json()
    
    for (project of projects) {
        var project_box = document.createElement('a')
        project_box.className = 'project'
        if (project.url) {
            project_box.href = project.url
            project_box.target = '_blank'
        }
        
        var img = document.createElement('img')
        img.className = 'project_img'
        img.src = 'static/images/projects/' + project.image
        project_box.appendChild(img)
        
        var content = document.createElement('div')
        content.className = 'project_content'
        
        var h3 = document.createElement('h3')
        h3.innerHTML = project.title
        content.appendChild(h3)
        
        var p = document.createElement('p')
        p.innerHTML = project.description
        content.appendChild(p)
        
        project_box.appendChild(content)
        
        projects_grid.appendChild(project_box)
    }
}

load_projects().then()