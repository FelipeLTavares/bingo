if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/bingo/sw.js', { scope: '/bingo/' })})}