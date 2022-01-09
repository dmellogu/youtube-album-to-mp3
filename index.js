const program = require('commander');
var fs = require('fs');
let MediaSplit = require('media-split');
const downloadsFolder = require('downloads-folder');


program
  .option('-v, --video <url>', 'Url for YouTube video.')
  .option('-t, --timestamps <timestamps>', 'Path to text file with timestamps to split mp3 by (name it [time.txt]).');

program.parse(process.argv);
const options = program.opts();
if (options.video && options.timestamps) {
  fs.readFile(options.timestamps, 'utf8', (err, data) => {
    if (err) throw err;
    let songs = data.split("\n");
    for (let i = 0; i < songs.length; i++) {
      songs[i] = "[" + songs[i];
      songs[i] = songs[i].replace(" -", "]");
    }
    let split = new MediaSplit({
      input: options.video,
      output: downloadsFolder(),
      downloadCover: false,
      quality: "highestaudio",
      sections: songs
    });
    split.parse();
  });
}
