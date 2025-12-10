const form = document.querySelector('form')
const profileResults = document.querySelector('.profile-results')

const feedbackMessage = message => profileResults.innerHTML = `<p>${message}</p>`

const githubUrl = userName => `https://api.github.com/users/${userName}`

const getUser = async userName => {
   try {
      const request = await fetch(githubUrl(userName))

      if (!request.ok) {
         throw ('Não foi possível obter os dados')
      }

      return request.json()
   } catch (error) {
      feedbackMessage(error)
   }
}

const UserData = userName => getUser(userName)

form.addEventListener('submit', async event => {
   event.preventDefault()

   const inputValue = event.target.search.value.trim()

   if (!inputValue) {
      feedbackMessage(`Por favor, digite um nome de usuário do gitHub.`)
      return
   }

   const user = await UserData(inputValue)   
   
   if (!user) {
      feedbackMessage(`Usuário inexistente.`)
      return
   }
   
   const {avatar_url, name, bio, followers, following} = user



   profileResults.innerHTML = `
      <div class="profile-card">
         <img src="${avatar_url}" alt="Foto do usuário">
         <div>
            <h3>${name}</h3>
            <p>${bio || 'Não possui bio cadastrada 😥. '}</p>
         </div>
      </div>
   `
})