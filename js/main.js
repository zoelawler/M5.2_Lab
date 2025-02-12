// functionality for showing/hiding the comments section
document.addEventListener('DOMContentLoaded', () => {
  const showHideBtn = document.querySelector('.show-hide');
  const commentWrapper = document.querySelector('.comment-wrapper');

  if (!showHideBtn || !commentWrapper) {
    console.log("Missing elements!");
    return;
  } else {
    console.log("Working so far")
  }

  commentWrapper.style.display = 'none';

  showHideBtn.onclick = function () {
    let showHideText = showHideBtn.textContent;
    if (showHideText === 'Show comments') {
      showHideBtn.textContent = 'Hide comments';
      commentWrapper.style.display = 'block';
    } else {
      showHideBtn.textContent = 'Show comments';
      commentWrapper.style.display = 'none';
    }
  };

  document.onkeydown = (e) => {
    if (e.key === 'Enter') {
      showHideBtn.click();
    }
  };

  // functionality for adding a new comment via the comments form

  const form = document.querySelector('.comment-form');
  const nameField = document.querySelector('#name');
  const commentField = document.querySelector('#comment');
  const list = document.querySelector('.comment-container');

  form.onsubmit = function (e) {
    e.preventDefault();
    submitComment();
  };

  function submitComment() {
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);

    nameField.value = '';
    commentField.value = '';
  }
})

