shownotes();

btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  txt = document.getElementById("text");
  notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(txt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  txt.value = "";
  shownotes();
});

function shownotes() {
  notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  html = "";
  notesobj.forEach(function (e, i) {
    html += `
        <div class="notecard m-3 card" style="width: 18rem;">
            <div class="card-body">
               <h5 class="card-title">Note ${i + 1}</h5>
                <p class="card-text">${e}</p>
               <button id="${i}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
          </div>
        </div>`;
  });

  noteselm = document.getElementById("notes");
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  } else {
    noteselm.innerHTML = `Sorry`;
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  iv = search.value.toLowerCase();

  notecards = document.getElementsByClassName("notecard");
  Array.from(notecards).forEach(function (e) {
    cardtxt = e.getElementsByTagName("p")[0].innerText;

    if (cardtxt.includes(iv)) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
});
