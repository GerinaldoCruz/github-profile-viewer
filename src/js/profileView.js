export const profileResults = document.querySelector('.profile-results')

export const feedbackMessage = message => profileResults.innerHTML = `<p>${message}</p>`

export const insertIntoDOM = (obj, profileResults) => {
   const {avatar_url, name, bio, followers, following} = obj
   
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
   `
}