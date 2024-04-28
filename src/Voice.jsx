import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import YouTube from 'react-youtube';

function Voice() {
  const [videoId, setVideoId] = useState('');
  // const { transcript, resetTranscript } = useSpeechRecognition();

  // const handleVoiceCommand = (command) => {
  //   if (command.startsWith('play')) {
  //     const searchTerm = command.replace('play', '').trim();
  //     searchYouTube(searchTerm);

  //   }
  // }
  // const searchYouTube = async (query) => {
  //   const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBYGSVhrBbEzG08oLNwPhYzCxC16dMDiiI&q=${query}&part=snippet&type=video&maxResults=1`
  //   )
  //   const data = await response.json();
  //   if (data.items.length > 0) {
  //     const videioId = data.items[0].id.videioId;
  //     setVideoId(videioId);
  //   }
  //   else {
  //     console.error('no videos found for your query')
  //   }
  // }

  // const opts={
  //   height:'390',
  //   width:'640',
  //   playerVars:{
  //     autoplay:1
  //   }

  // };

  // const onReady=(event)=>{
  //   event.target.pauseVideo();
  // }


  const startListening = () => {
    console.log('start');
    // resetTranscript();
    // SpeechRecognition.startListening({ continuous: true })
  }
  const stopListening = () => {
    console.log('stop');
    // SpeechRecognition.stopListening();
    // handleVoiceCommand(transcript);

  }

  return (
    <>
      <h1>voice Controlled You tube player</h1>
      <button onClick={() => startListening()}>Start Listening</button>
      <button onClick={() => stopListening()}>Stop Listening</button>
      {/* <p>{transcript}</p> */}
      {/* {videoId && <YouTube videoId={videoId} opts={opts} onReady={onReady} />} */}
    </>
  )
}

export default Voice