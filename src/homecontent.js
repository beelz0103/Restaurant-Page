export default function generatehomecontent() {
  const homecontent = document.createElement('div');
  homecontent.id = "home"

  const paragraphtitle = document.createElement('div');
  paragraphtitle.id = "paragraphtitle"
  paragraphtitle.textContent = "Irasshai!!"

  const paragraph = document.createElement('div');
  paragraph.id = "paragraph"
  paragraph.textContent = 
  `At this 『 NGNL 』themed gaming inn, you get the chance to win a free meal if you beat our employee gamer at game
  associated with the menu. You'll have to follow the Ten Covenants when playing the games. Asshente!!!`
  const rules = document.createElement('div');
  rules.classList.add("rules")
  generateRuleDiv(rules_content, rules)

  homecontent.appendChild(paragraphtitle)
  homecontent.appendChild(paragraph)
  homecontent.appendChild(rules)


  document.querySelector(".content").appendChild(homecontent);
}

function generateRuleDiv(array, parentDiv) {
  array.forEach((rule) => {
    const rule_div =  document.createElement('div');
    rule_div.textContent = rule
    parentDiv.appendChild(rule_div)
  })
}

const rules_content = [`十の盟約 `, 
`【一つ】この世界におけるあらゆる殺傷、戦争、略奪を禁ずる`,
`【二つ】争いは全てゲームによる勝敗で解決するものとする`,
`【三つ】ゲームには、相互が対等と判断したものを賭けて行われる`,
`【四つ】「三」に反しない限り、ゲーム内容、賭けるものは一切を問わない`,
`【五つ】ゲーム内容は、挑まれたほうが決定権を有する`,
`【六つ】"盟約に誓って"行われた賭けは、絶対遵守される`,
`【七つ】集団における争いは、全権代理者をたてるものとする`,
`【八つ】ゲームの中の不正発覚は、敗北と見なす`,
`【九つ】以上をもって神の名のもと絶対不変のルールとする`,
`【十】みんななかよくプレイしましょう`]