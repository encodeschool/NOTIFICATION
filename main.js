let toastsDiv = document.querySelector('.toasts');

let SUCCESS = "<i class='bx bxs-check-shield' ></i> This prompt was successful";
let WARNING = "<i class='bx bxs-error' ></i> This prompt was warning";
let ERROR = "<i class='bx bxs-error-circle' ></i> This prompt was error";

function showAlert(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastsDiv.appendChild(toast);

    if (msg.includes('warning')) {
        toast.classList.add('warning');
    } else if (msg.includes('error')) {
        toast.classList.add('error');
    }

    setTimeout(() => {
        toast.remove()
    },4900);
}