// src/components/VideoChat.tsx
import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const VideoChat: React.FC = () => {
  return (
    <div className="video-chat-container">
      <JitsiMeeting
        roomName="YourCustomRoomName"
        configOverwrite={{
          startWithAudioMuted: true,
          startWithVideoMuted: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: 'Your Name',
          email:""
        }}
        getIFrameRef={(iframeRef: HTMLDivElement) => {
          iframeRef.style.height = '100vh';
          iframeRef.style.width = '100%';
        }}
      />
    </div>
  );
};

export default VideoChat;
