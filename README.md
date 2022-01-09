# youtube-album-to-mp3

A Node.js command-line application for converting a YouTube video of an album/soundtrack to individual, named mp3 files.

## Installation

### Prerequisites

To run this project, you need to have a local installation of Node.js present on your system. You can download it from https://nodejs.org/en/download/

### Installation from Github

#### Checkout the project from Github to a local folder

`git clone https://github.com/ytb2mp3/youtube-mp3-downloader.git`

## Running

### Basic example

A basic usage example is the following:
`$ node index.js --video "https://www.youtube.com/watch?v=3ces6njZP94&ab_channel=Kizzy" --timestamps "time.txt"`

You must specify the path to a text file containing timestamps formatted as:
`[hh:]mm:ss - My Music Name`

## Special Thanks

Hey Vik :wink: Until Nintendo uploads their music to Spotify, I hope this will make due.

## Credits

commander: https://github.com/tj/commander.js
downloads-folder: https://github.com/juliangruber/downloads-folder
ffmpeg-static: https://github.com/eugeneware/ffmpeg-static
media-split: https://github.com/skiptirengu/media-split