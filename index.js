const video = document.getElementById('intro-video');
const contentOverlay = document.getElementById('content-overlay');

// 1. تشغيل الفيديو فوراً
video.play().catch(err => console.log("تحتاج للتفاعل مع الصفحة أولاً"));

// 2. حل التوقيت البديل (أضمن طريقة)
// هنستنى 6 ثواني بالضبط وبعدين نظهر الصندوق
setTimeout(() => {
    console.log("انتهى الوقت المفترض للفيديو - إظهار الصندوق الآن");
    
    // إظهار الصندوق يدوياً بقوة الـ CSS
    contentOverlay.classList.remove('hidden');
    contentOverlay.style.display = 'flex';
    contentOverlay.style.opacity = '1';
    contentOverlay.style.visibility = 'visible';
}, 6000); // لو الفيديو أطول أو أقصر، غير الرقم ده (6000 يعني 6 ثواني)

// 3. احتياطياً لو الـ ended اشتغلت قبل الـ Timer
video.addEventListener('ended', () => {
    contentOverlay.classList.remove('hidden');
    contentOverlay.style.display = 'flex';
});