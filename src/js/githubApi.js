import {feedbackMessage} from './profileView.js'

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

export const userData = userName => getUser(userName)