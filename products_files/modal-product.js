var triggerButton = document.querySelectorAll("a[target-modal-id]");
var closeButton = document.querySelectorAll(".close-button");

triggerButton.forEach(element => {
    element.addEventListener('click', function(e){
        console.log(e.target.tagName);
        var modalId = e.target

        if (modalId.tagName == "SPAN"){
            modalId = modalId.parentElement.getAttribute("target-modal-id");
        }else {
            modalId = modalId.getAttribute("target-modal-id");
        }
        document.querySelector(".modal-overlay[modal-id='"+modalId+"']").style.display = "block";
    })    
});

closeButton.forEach(element => {
    element.addEventListener('click', function(e){
        e.target.parentElement.parentElement.parentElement.style.display = "none";
    })
});