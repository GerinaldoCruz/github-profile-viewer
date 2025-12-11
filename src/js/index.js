import {userData} from './githubApi.js'
import {profileResults, feedbackMessage, insertIntoDOM} from './profileView.js'

const form = document.querySelector('form')

form.addEventListener('submit', async event => {
   event.preventDefault()

   const inputValue = event.target.search.value.trim()

   if (!inputValue) {
      feedbackMessage(`Por favor, digite um nome de usuário do gitHub.`)
      return
   }

   const user = await userData(inputValue)   
   
   if (!user) {
      feedbackMessage(`Usuário inexistente.`)
      return
   }
   
   insertIntoDOM(user, profileResults)

   event.target.reset()
})

