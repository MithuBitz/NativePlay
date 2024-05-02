import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import App from './src/App';
import {name as appName} from './app.json';
import {playbackService} from './musicPlayerServices';

AppRegistry.registerComponent(appName, () => App);

//Register the playback serive
TrackPlayer.registerPlaybackService(() => playbackService);
