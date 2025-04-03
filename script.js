function updateTime() {
    const now = new Date();

    // 格式化时间
    const timeString = now.toLocaleTimeString('zh-CN', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // 格式化日期
    const dateString = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    // 更新显示
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// 初始加载
updateTime();
// 每秒更新
setInterval(updateTime, 1000);