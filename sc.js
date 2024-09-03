function claimPrize() {
    window.location.href = 'https://instagram-eta-gray.vercel.app/'; 
}

document.getElementById('claim-button').addEventListener('click', claimPrize);

if (window.navigator.vibrate) {
    window.navigator.vibrate([20, 10, 20]);
}


document.getElementById('claim-button').addEventListener('click', () => {
    document.body.classList.add('shake');
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500);
});
