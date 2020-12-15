// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
    constructor(){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    changeBitrate = () =>{
        this.setState(prevState =>{
            return {
                settings:{...prevState.settings, bitrate:12}
            }
        })
    }

    changeResolution = () =>{
        this.setState(prevState =>{
            const video ={
                resolution: "720p"
            }
            return {
                settings:{...prevState.settings, video}
            }
        })
    }

    render(){
         
    return  <div>
            <button onClick={this.changeBitrate} className={'bitrate'}>Bitrate</button>
            <button onClick={this.changeResolution} className={'resolution'}>Resolution</button>
            </div>
    }
}