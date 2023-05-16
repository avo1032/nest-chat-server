const socket = io();

socket.on('message', (message) => {
  // 서버로부터 받은 메시지를 콘솔에 출력합니다.
  console.log('Message from server:', message);
});