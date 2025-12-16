import {userData, repositoriesData} from './githubApi.js'
import {feedbackMessage, insertIntoDOM} from './profileView.js'

const form = document.querySelector('form')

form.addEventListener('submit', async event => {
   event.preventDefault()

   const inputValue = event.target.search.value.trim()

   if (!inputValue) {
      feedbackMessage(`Por favor, digite um nome de usuário do gitHub.`)
      return
   }

   const user = await userData(inputValue)
   const repositories = await repositoriesData(inputValue)
   
   console.log(repositories);
   

   if (!user) {
      feedbackMessage(`Usuário inexistente.`)
      event.target.reset()
      return
   }
   
   insertIntoDOM(user, repositories)

   event.target.reset()
})
