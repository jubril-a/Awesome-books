export function dateTimer() {
    let dateWrapper = document.querySelector(".date");
    let date = new Date();
    let formattedDate = date.toString().split(" ").slice(0, 5).join(" ");
    
    dateWrapper.innerHTML = formattedDate;
}