import {feedbackMessage} from './profileView.js'

const baseUrl = `https://api.github.com/users/`
const githubUrl = userName => `${baseUrl}${userName}`
const repositoriesUrl = userName => `${baseUrl}${userName}/repos?per_page=10&sort=created`

const getUserData = async url => {
   try {
      const request = await fetch(url)
   
      if (!request.ok) {
         throw(`Não foi possível obter os dados`)
      }
   
      return request.json()
   } catch (error) {
      feedbackMessage(error)
   }
}

export const userData = async userName => 
   await getUserData(githubUrl(userName))
  
export const repositoriesData = async userName => 
   await getUserData(repositoriesUrl(userName))