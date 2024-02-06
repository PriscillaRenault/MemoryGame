const createCard = (CardUrl) => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.value = CardUrl

  const cardContent = document.createElement('img')
  cardContent.classList.add('js-cardContent')
  cardContent.src = `${CardUrl}`
  card.appendChild(cardContent)
  return card
}
const gameBoard = document.getElementById('js-gameBoard')
gameBoard.appendChild(createCard('https://picsum.photos/id/243/100/100'))
