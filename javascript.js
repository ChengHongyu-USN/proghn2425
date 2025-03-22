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

window.onload = function() {
    let fileInput = document.getElementById('fileInput');
    let fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        let file = fileInput.files[0];
        let textType = new RegExp("text.*");

        if (file.type.match(textType)) { // on vérifie qu'on a bien un fichier texte
            var reader = new FileReader();
            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
            }
            reader.readAsText(file);    

            document.getElementById("logger").innerHTML = '<span class="infolog">Fichier chargé avec succès</span>';
        } else { // pas un fichier texte : message d'erreur.
            fileDisplayArea.innerText = "";
            document.getElementById("logger").innerHTML = '<span class="errorlog">Type de fichier non supporté !</span>';
        }
    });
}

function segmentation() {
      const analyse = document.getElementById("fileDisplayArea").innerText;
      const result = analyse.split(",").map(item => item.trim());
      document.getElementById("page-analysis").innerHTML = `
        <h3>Résultat de segmentation (${result.length} éléments)</h3>
        <ol>${result.map(item => `<li>${item}</li>`).join("")}</ol>
    `;
}
