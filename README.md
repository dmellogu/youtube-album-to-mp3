# youtube-album-to-mp3

A Node.js command-line application for converting a YouTube video of an album/soundtrack to individual, named mp3 files.

## Installation

### Prerequisites

To run this project, you need to have a local installation of Node.js present on your system. You can download it from https://nodejs.org/en/download/

### Installation from Github

#### Checkout the project from Github to a local folder

`git clone https://github.com/dmellogu/youtube-album-to-mp3`<br />
`cd youtube-album-to-mp3`<br />
`npm ci`

## Running

### Basic example

A basic usage example is the following:<br />
`node index.js --video "https://www.youtube.com/watch?v=3ces6njZP94&ab_channel=Kizzy" --timestamps "time.txt"`

You must specify the path to a text file containing timestamps formatted as:<br />
`[hh:]mm:ss - My Music Name`

## Special Thanks

Hey Vik :wink: Until Nintendo uploads their music to Spotify, I hope this will make due.

## Credits

commander: https://github.com/tj/commander.js <br />
downloads-folder: https://github.com/juliangruber/downloads-folder <br />
ffmpeg-static: https://github.com/eugeneware/ffmpeg-static <br />
media-split: https://github.com/skiptirengu/media-split