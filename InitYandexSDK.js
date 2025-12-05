var sdk;
var player;

YaGames
  .init()
  .then(ysdk => {
      console.log('Yandex SDK initialized');
      sdk = ysdk;
      initPlayer();
  });

function initPlayer() {
  return sdk.getPlayer({ scopes: false }).then(_player => {
    player = _player;
    return player;
  });
}
