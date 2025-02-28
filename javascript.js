function bonjour() {
   const name = document.getElementById("nomInput").value.trim();

   const overlay = document.createElement("div");
   overlay.className = "overlay";

   const modal = document.createElement("div");
   modal.className = "modal";
   
   const closebtn = document.createElement("span");
   closebtn.className = "close";
   closebtn.innerHTML = "x";
   closebtn.onclick = () => {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
    };

   const content = document.createElement("div");
   content.innerHTML = `Bonjour, ${name || "mon ami,e"}! o(*￣▽￣*)ブ`;
   content.style.fontSize = "20px";
   
   modal.appendChild(closebtn);
   modal.appendChild(content);
   document.body.appendChild(overlay);
   document.body.appendChild(modal);

    overlay.onclick = () => {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
    };
}

let isHelpVisible = false;

function aide() {
    const text = document.getElementById("text");
    
    if (!text) {
        console.error("NotFound");
        return;
    }

    isHelpVisible = !isHelpVisible;

    if (isHelpVisible) {
        text.innerHTML = `
            <strong>Aide</strong>
                <p>Ici, on va afficher l'aide.</p>
                <p>Cliquer encore une fois pour la fermer</p>
        `;
    } else {
        text.innerHTML = "";
    }
}