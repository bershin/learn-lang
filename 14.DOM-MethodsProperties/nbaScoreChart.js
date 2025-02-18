const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, targetTeam) => {
    const ulparent = document.createElement('ul')
    for(let game of games){
      const newLi = document.createElement('li')
      newLi.innerHTML = getTableList(game);
      // iswinner(game, targetTeam) ? newLi.classList.add("win") : newLi.classList.add("lose")
      newLi.classList.add(iswinner(game, targetTeam) ? "win" : "lose")
      ulparent.appendChild(newLi)
    }
    return ulparent;
}

const getTableList = ({awayTeam, homeTeam}) =>{
  const {team: ateam, points: apoint} = awayTeam;
  const {team: hteam, points: hpoint} = homeTeam;
  const teamList = `${ateam} @ ${hteam}`
  return (hpoint > apoint ) ? `${teamList} <b>${hpoint}</b>-${apoint}` : `${teamList} ${hpoint}-<b>${apoint}</b>`
}

const iswinner = ({awayTeam, homeTeam}, targetTeam) => {
  const {team: ateam, isWinner: isAWin} = awayTeam;
  const {team: hteam, isWinner: isHWin} = homeTeam;
  return (ateam == targetTeam && isAWin == true) || (hteam == targetTeam && isHWin == true)
}

const hsChart = makeChart(warriorsGames, 'Houston')
const houstenSection = document.getElementById("hs")
houstenSection.appendChild(hsChart)
const gsChart = makeChart(warriorsGames, 'Golden State')
const goldenSection = document.getElementById("gs")
goldenSection.appendChild(gsChart)
