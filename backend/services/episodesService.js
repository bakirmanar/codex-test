let episodesData = require('../../data/serials.json')[0]._embedded.episodes;

exports.getEpisodesData = function (req, res, next) {
  let season = Number.parseInt(req.query.season) ;

  if (!Number.isNaN(season)) {
    episodesData = episodesData.filter(episode => {
      return episode.season === season;
    });
  }

  res.send(episodesData);
};
