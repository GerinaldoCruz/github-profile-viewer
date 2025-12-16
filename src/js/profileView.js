const profileResults = document.querySelector('.profile-results')

export const feedbackMessage = message => 
   profileResults.innerHTML = `<p>${message}</p>`

const createRepositoryCard = (repo) => `
   <a href="${repo.html_url}" target="_blank" >
      <div class="repository-card">
      <h3>${repo.name}</h3>
         <div class="repository-status">
            <ul>
               <li>⭐ Stars: ${repo.stargazers_count}</li>
               <li>🍴 Forks: ${repo.forks}</li>
               <li>👀 Watchers: ${repo.watchers_count}</li>
               <li>💻 Linguagem: ${repo.language || 'Não definida'}</li>
            </ul>
         </div>
      </div>
   </a>
`

const buildRepositoriesHTML = (repositories) => {
   if (!repositories || repositories.length === 0) {
      return `<p>Nenhum repositório encontrado.</p>`
   }

   return repositories.map(createRepositoryCard).join('')
}

export const insertIntoDOM = (user, repositoriesData) => {
   const { avatar_url, name, bio, followers, following } = user
   const repositoriesHTML = buildRepositoriesHTML(repositoriesData)

   profileResults.innerHTML = `
      <div class="profile-card">
         <img src="${avatar_url}" alt="Foto do usuário">
         <div>
            <h3>${name}</h3>
            <p>${bio || 'Não possui bio cadastrada 😥. '}</p>
         </div>
      </div>
      
      <div class="profile-counter">
         <div class="followers">
            <h4>👨‍👧 Seguidores</h4>
            <span>${followers}</span>
         </div>
         <div class="following">
            <h4>👨‍👧 Seguindo</h4>
            <span>${following}</span>
         </div>
      </div>

      <div class="profile-repositories">   
         <h2>Repositórios</h2>
         <div class="repositories">
            ${repositoriesHTML}
         </div>
      </div>
   `
}
