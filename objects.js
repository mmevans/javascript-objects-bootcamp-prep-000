var playlist = {
  Queen : "Fat Bottom Girls"
  
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}