window.onload = () => {
    async function getImg(text) {
        const res = await fetch(`/code?codeName=${text}`);
        const ans = await res.text();
        return ans;
    }

    const btn = document.querySelector('#qr_btn');
    const textInput = document.querySelector('#qr_text');
    const qrImg = document.querySelector('#qr_img');
    const downloadBtn = document.querySelector('#qr_btn_download');
    const resultContainer = document.querySelector('.result_container');
    btn.addEventListener('click', () => {
        const ans = getImg("'" + textInput.value + "'");
        ans.then(val => {
            qrImg.setAttribute('src', val);
            downloadBtn.setAttribute('href', val)
            downloadBtn.setAttribute('download', `QR_Code_${Date.now()}.jpg`)
        })
        resultContainer.classList.remove('hide')
        resultContainer.classList.add('slide-in-left')
        setTimeout(() => {
            resultContainer.classList.remove('slide-in-left')
        }, 500)
    })
}
