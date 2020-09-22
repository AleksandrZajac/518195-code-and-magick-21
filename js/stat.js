'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 110;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const FONT_GAP = 90;
const SCORE_GAP = 10;
const BAR_WIDTH = 90;
const CONGRATULATIONS_TEXT_X = 135;
const CONGRATULATIONS_TEXT_Y = 35;
const LIST_OF_REZULTS_X = 135;
const LIST_OF_REZULTS_Y = 55;
const FIRST_PLAYER_NAME_X = 160;
const FIRST_PLAYER_NAME_Y = 260;
const FIRST_PLAYER_BAR_X = 160;
const FIRST_PLAYER_BAR_Y = 90;
const FIRST_PLAYER_BAR_WIDTH = 40;
const FIRST_PLAYER_BAR_HEIGHT = 150;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = (ctx, players, times) => {
  renderCloud(
    ctx,
    CLOUD_X + CLOUD_GAP,
    CLOUD_Y + CLOUD_GAP,
    'rgba(0, 0, 0, 0.7)');
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = '#000';

  ctx.fillText('Ура вы победили! ', CONGRATULATIONS_TEXT_X, CONGRATULATIONS_TEXT_Y);
  ctx.fillText('Список результатов:', LIST_OF_REZULTS_X, LIST_OF_REZULTS_Y);

  const getMaxElement = (arr) => {
    var maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return Math.round(maxElement);
  };

  for (let i = 0; i < players.length; i++) {

    ctx.font = "16px PT Mono";
    ctx.fillStyle = 'black';

    ctx.fillText(
      players[i],
      FIRST_PLAYER_NAME_X + FONT_GAP * i,
      FIRST_PLAYER_NAME_Y
    );

    ctx.fillText(
      Math.round(times[i]),
      FIRST_PLAYER_NAME_X + FONT_GAP * i,
      FIRST_PLAYER_BAR_Y - SCORE_GAP + FIRST_PLAYER_BAR_HEIGHT - FIRST_PLAYER_BAR_HEIGHT / getMaxElement(times) * Math.round(times[i]),
    );

    players[i] == 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'hsl(241, 100%,' + Math.floor(Math.random() * 99 + 1) + '%)';

    ctx.fillRect(
      FIRST_PLAYER_BAR_X + BAR_WIDTH * i,
      FIRST_PLAYER_BAR_Y + FIRST_PLAYER_BAR_HEIGHT - FIRST_PLAYER_BAR_HEIGHT / getMaxElement(times) * Math.round(times[i]),
      FIRST_PLAYER_BAR_WIDTH,
      FIRST_PLAYER_BAR_HEIGHT / getMaxElement(times) * Math.round(times[i])
    );
  }
};

















