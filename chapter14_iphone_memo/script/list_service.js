function loadList() {
  let boardDates = !!localStorage.getItem("boardDatas")
  ? JSON.parse(localStorage.getItem("boardDatas"))
  : [];

  const boardlist = document.querySelector('board-list-container');
  boardlist.innerHTML = boardDates.map(data => `
    <li class="board-box">
      <header class='board-header>
        <h1>${data.title}(${data.writer})</h1>
      </header>
      <main class="board-main">
        <pre>${data.content}</pre>
      </main>
    </li>
    `).join("");
}

loadList();