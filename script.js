function openModal(image){
    const modal=document.getElementById('modal');
    const modal_image=document.getElementById('modal-image');

    modal.style.display="flex";
    modal_image.src=image.src;
}

function closeModal(){
    const modal=document.getElementById('modal');
    modal.style.display="none";

}