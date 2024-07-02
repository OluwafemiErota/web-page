document.addEventListener('DOMContentLoaded', () => {
  function updateTime() {
    const now = new Date();
    const options = { 
      timeZone: 'Africa/Lagos', 
      hour12: true, 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric'
    };
    const nigerianTime = now.toLocaleTimeString('en-US', options);
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Lagos' });
    document.getElementById('current-time').textContent = nigerianTime;
    document.getElementById('current-day').textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
