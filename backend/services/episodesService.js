let _ = require('underscore');

let serialsData = require('../../data/serials.json');

exports.getEpisodesData = function (req, res, next) {
  let season = Number.parseInt(req.query.season) ;
  let id = Number.parseInt(req.params.id);
  let serial = _.find(serialsData, (item) => {
    return item.id === id;
  });
  let episodes = serial._embedded.episodes;

  if (!Number.isNaN(season)) {
    episodes = episodes.filter(episode => {
      return episode.season === season;
    });
  }

  res.send(episodes);
};
