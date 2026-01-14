alert("game.js 로드됨");

let playerHP = 100;
let enemyHP = 50;

function attack() {
  enemyHP -= 10;

  if (enemyHP <= 0) {
    document.getElementById("status").innerText = "🎉 적을 물리쳤다!";
    enemyHP = 0;
  } else {
    playerHP -= 5;
    document.getElementById("status").innerText = "⚔️ 전투 중!";
  }

  document.getElementById("player").innerText = "플레이어 HP: " + playerHP;
  document.getElementById("enemy").innerText = "적 HP: " + enemyHP;
}
