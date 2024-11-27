import {BACKEND_BASE_URL} from "./constants"

const getData = async () => {
  console.log("Fetching data")
  const url = BACKEND_BASE_URL + "/"
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

const submitData = async () => {
  console.log("Fetching data")
  const url = BACKEND_BASE_URL + "/submit"
  const newScore = {
    name: "Aanand",
    varc: {
      attempt: 19, correct: 15, wrong: 4
    },
    lr: {
      attempt: 19, correct: 15, wrong: 4
    },
    qa: {
      attempt: 19, correct: 15, wrong: 4
    },
    score: 100,
    maxScore: 68*3
  }
  const response = await fetch(url, {
    method: "POST", 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({score: newScore})
  })
  const data = await response.json()
  console.log(data)
}

getData()

submitData()