function handleEyeClick() {
    const inputElement=document.getElementById("user-input");
    const viewElement=document.getElementById("view");
    if (inputElement.type==="password"){
        inputElement.type="text";
        viewElement.src="images/view.png";
    }
    else{
        inputElement.type="password";
        viewElement.src="image/hide.png";
    }
    }
