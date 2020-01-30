import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { SocketStateEnum } from '../models/SocketStateEnum';

const useSocket = (url: string): [SocketIOClient.Socket, string] => {
  const [socket] = useState(io(url, { autoConnect: false }));
  const [socketState, setSocketState] = useState('loading');

  useEffect(() => {
    socket.connect();
    socket.on('connect', () => setSocketState(SocketStateEnum.Connected));
    socket.on('connect_error', () => setSocketState(SocketStateEnum.Error));
    socket.on('disconnect', () => setSocketState(SocketStateEnum.Loading));

    return () => {
      socket.removeAllListeners();
      socket.close();
    };
  }, [socket]);

  return [socket, socketState];
};

export default useSocket;
